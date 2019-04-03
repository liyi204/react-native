import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import tracker from '../../config/gaTools';
import ReqApi from '../../config/reqApi';
import FirebaseUtils from "../../config/firebaseTools";
import resourceObj  from "../../config/resourceObj";

import view from './view';

export default class ScreenHome extends Component {
  /*static navigationOptions = {
    title: '首页',
    tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require('../../assets/images/tab_home_active.png')
        : require('../../assets/images/tab_home.png');
      return <Image source={icon} style={{ height: 22, width: 22 }} />;
    },
  };*/

  static navigationOptions = {
    header:null
  }
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.tracker = tracker;
    this._search = this._search.bind(this);
    this.state = {
      text:"",
      scatterInfo:""
    }
  }

  componentDidMount() {
    // 隐藏启动页
    SplashScreen.hide();
    this.tracker.trackScreenView("ScreenHome");
    //this._search();
  }

  async _search() {
    const scatterInfo = await ReqApi.productList();
    console.log(scatterInfo);
  }

  _goRouter(router){
    FirebaseUtils.recordActionLogByCount(Object.assign(resourceObj(),{page_name:router,
    from_page:ScreenHome.name}));
    this.navigation.navigate(router);
/*

    let data = {  
      page_name:ScreenHome.name,
      from_page:ScreenHome.name,
      country:"Indonesia",
      city:"",
      type:"router",
      ip:"",
      name:"",
      create_time:new Date().toDateString()
    }

    console.warn(data);
    switch(router) {
      case "login":
        
        this.tracker.trackEvent("login", "Click", {label: "dsadasdsad", value: 22 });
        this.tracker.setUser("test");
        console.log(data);
        FirebaseUtils.recordActionLogByCount(Object.assign(data,{user_id:"10001"}));
        break;
      case "registration":
        this.tracker.trackTiming("testcategory", 2000, { name: "LoadList", label: "v1.0.3" });
        FirebaseUtils.recordActionLogByCount(Object.assign(data,{user_id:"10002",name:"PRUwealth",type:"products",country:"Hong Kong"}));
        this.tracker.trackEvent("registration", "Click");
        break;
      case "hot products":
        this.tracker.trackSocialInteraction("Baidu","get","https://wwww.baidu.com/");
        this.tracker.trackEvent("hot_products", "Click");
        FirebaseUtils.recordActionLogByCount(Object.assign(data,{user_id:"10003",name:"PRUwith you",type:"products"}));


        break;
      case "usage statistics":
       this.tracker.trackSocialInteraction("360","get","https://wwww.360.cn/");
        this.tracker.trackEvent("usage_statistics", "Click");
        FirebaseUtils.recordActionLogByCount(Object.assign(data,{user_id:"10004",name:"PRUsmart gain",type:"products"}));
        break;
      case "active users":
        FirebaseUtils.recordActiveUsers(data);
        this.tracker.trackEvent("active_users", "Click");
        FirebaseUtils.recordActionLogByCount(Object.assign(data,{user_id:"10005",name:"PRUwealth gain",type:"products"}));
        break;
      case "purchase":
        //let data ={};
       // FirebaseUtils.recordPurchase(data);
        this.tracker.trackEvent("purchase", "Click");
        FirebaseUtils.recordActionLogByCount(Object.assign(data,{user_id:"100056"}));
        break;
      case "partner access":
        //let data ={};
        //FirebaseUtils.recordPartnerAccess(data);
        this.tracker.trackEvent("partner_access", "Click");
        FirebaseUtils.recordActionLogByCount(Object.assign(data,{user_id:"10006",name:"PRUwealth gain",type:"products",country:"Hong Kong"}));
        break;  
      case "Wealth":
        //let data ={};
        //FirebaseUtils.recordPartnerAccess(data);
        this.tracker.trackEvent("Wealth", "Click",{label:"Hong Kong",value:1111});
        break;  
      case "Health":
        //let data ={};
        //FirebaseUtils.recordPartnerAccess(data);
        this.tracker.trackEvent("Health", "Click",{label:"Indonesia",value:22});
        break; 
      case "Social":
        //let data ={};
        //FirebaseUtils.recordPartnerAccess(data);
        this.tracker.trackEvent("Social", "Click",{label:"Indonesia",value:12});
        break;  
        case "Babylon":
        this.tracker.trackEvent("Babylon", "Click", { label: "Babylon", value: 1 });
        break;
      case "Doctors":
        this.tracker.trackEvent("Doctors", "Click", { label: "Doctors", value: 1 });
        break;
      case "Prenetics":
        this.tracker.trackEvent("Prenetics", "Click", { label: "Prenetics", value: 1 });
        break;
      case "UOB":
        this.tracker.trackEvent("UOB", "Click", { label: "UOB", value: 1 });
        break;
      case "OVO":
        this.tracker.trackEvent("OVO", "Click", { label: "OVO", value: 1 });
        break;
      case "MyDoc":
        this.tracker.trackEvent("MyDoc", "Click", { label: "MyDoc", value:1 });
        break;  
      default:
        this.tracker.trackSocialInteraction("Twitter", "Post");
        FirebaseUtils.recordActionLogByCount(Object.assign(data,{user_id:"10008",page_name:router}));
        this.navigation.navigate(router);
        break;    
    }*/
  }

  render() {
    return view(this)
  }
}
