import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ScreenHome from '../ScreenHome';
import ScreenTab1 from '../ScreenTab1';
import ScreenTab2 from '../ScreenTab2';
import ScreenTab3 from '../ScreenTab3';

const TabNavigator  = createBottomTabNavigator(
  {
    ScreenHome: ScreenHome,
    ScreenTab1: ScreenTab1,
    ScreenTab2: ScreenTab2,
    ScreenTab3: ScreenTab3
  }
);

export default createAppContainer(TabNavigator);
