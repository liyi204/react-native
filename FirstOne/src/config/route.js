// 引入依赖
import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

// 引入页面组件
/*
import ScreenBottomTab from '../screens/ScreenBottomTab';
import ScreenHome from '../screens/ScreenHome';
import ScreenSome1 from '../screens/ScreenSome1';
import ScreenSome2 from '../screens/ScreenSome2';
import ScreenTab1 from '../screens/ScreenTab1';
import ScreenTab2 from '../screens/ScreenTab2';
import ScreenTab3 from '../screens/ScreenTab3';



import ScreenWebView from '../screens/ScreenWebView';
*/
import ScreenHome from '../screens/ScreenHome';
import ScreenProducts from '../screens/ScreenProducts';
import ScreenWealth from '../screens/ScreenWealth';
import ScreenHealth from '../screens/ScreenHealth';
import ScreenSocial from '../screens/ScreenSocial';
import ScreenProductsDetail from '../screens/ScreenProductsDetail';

// 配置路由
const AppNavigator = createStackNavigator({
  ScreenHome: ScreenHome,
  ScreenWealth:ScreenWealth,
  ScreenHealth:ScreenHealth,
  ScreenSocial:ScreenSocial,
  ScreenProducts:ScreenProducts,
  ScreenProductsDetail:ScreenProductsDetail
  },{
    initialRouteName: "ScreenHome"
  }
);

export default createAppContainer(AppNavigator);
