import React from 'react';
import { View, Text, Image } from 'react-native';

export default self => (
  <View>
    <Text style={{ fontSize: 12 }}>测试自动加载不同分辨率图片</Text>
    <Image
      source={require('../../assets/images/test.png')}
    />
  </View>
);
