import React from 'react';
import { View,ImageBackground,Image,TouchableHighlight } from 'react-native';
import pxToDp from '../../config/pxToDp';
import styles from './style';
export default self => (
  <View style={{flex: 1, flexDirection: 'column'}}>
    <View style={{width: '100%', height: '15%'}} >
        <Image
            style={styles.imgLogo}
            source={require('../../assets/images/logo.png')}
            />
           

    </View>
    <View style={{width: '100%', height: '60%'}} >
    <ImageBackground source={require('../../assets/images/back.png')} style={styles.backImg}> 
        <TouchableHighlight onPress={self._goRouter.bind(self,'ScreenHealth')} underlayColor="rgba(0,0,0,0)">
            <Image
              style={styles.imgBtn}
              source={require('../../assets/images/healthbtu.png')}
              onPress={self._goRouter.bind(self,'ScreenHealth')}
            />
            </TouchableHighlight>
        <TouchableHighlight onPress={self._goRouter.bind(self,'ScreenWealth')} underlayColor="rgba(0,0,0,0)">
            <Image
              style={styles.imgBtn}
              source={require('../../assets/images/wealthbtu.png')}
            />
        </TouchableHighlight>
        <TouchableHighlight onPress={self._goRouter.bind(self,'ScreenSocial')} underlayColor="rgba(0,0,0,0)" >
            <Image
              style={styles.imgBtn}
              source={require('../../assets/images/socialbtu.png')}
            />
        </TouchableHighlight>
        <TouchableHighlight onPress={self._goRouter.bind(self,'ScreenProducts')} underlayColor="rgba(0,0,0,0)">
            <Image
              style={styles.imgBtn}
              source={require('../../assets/images/products.png')}
            />
        </TouchableHighlight>  
    </ImageBackground> 
    </View>
  </View>
);