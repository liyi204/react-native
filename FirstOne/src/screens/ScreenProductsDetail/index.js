import React, { Component } from "react";
import { ImageBackground } from "react-native";
import imgMap from "../../config/imgMaps";

export default class ScreenProductsDetail extends Component {
  static navigationOptions = ({ navigation }) =>{
    return {
      title: navigation.getParam('title', 'A Nested Details Screen'),
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false
    };

  }

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('id');
    const img = imgMap[`p_d_${itemId}`];
    return (
      <ImageBackground source={img} style={{width: '100%', height: '100%',flex: 1}}> 
      
      </ImageBackground>
    );
  }

}

