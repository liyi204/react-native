import React, { Component } from "react";

import { Image, FlatList, Text, View,TouchableHighlight,Alert } from "react-native";
import styles from "./style";
import FirebaseUtils from "../../config/firebaseTools";
import resourceObj  from "../../config/resourceObj";
import productList from "./products.json"
import imgMap from "../../config/imgMaps";

export default class ScreenProducts extends Component {
  static navigationOptions = {
    title: 'Product List',
  };
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      data: [],
      loaded: false
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

 fetchData() {
   // const productList = await ReqApi.productList();
    this.setState({
      data: this.state.data.concat(productList.products),
      loaded: true
    });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderProductList.bind(this)}
        style={styles.list}
        keyExtractor={item => item.id}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading productList...</Text>
      </View>
    );
  }
  router(item){
    FirebaseUtils.recordActionLogByCount(Object.assign(resourceObj(),{page_name:"ScreenProductsDetail",
      from_page:ScreenProducts.name,type:"products",name:item.title}));
      FirebaseUtils.recordActionLogByCount(Object.assign(resourceObj(),{page_name:"ScreenProductsDetail",
      from_page:ScreenProducts.name})); 
    this.navigation.navigate("ScreenProductsDetail",item);
  }
  renderProductList({ item }) {

    item.img = imgMap[`p_${item.id}`];
    return (
      <TouchableHighlight onPress={this.router.bind(this,item)} underlayColor="rgba(0,0,0,0)">
       <Image
          source={item.img}
          style={styles.thumbnail} 
        />
      </TouchableHighlight>
    );
  }
}

