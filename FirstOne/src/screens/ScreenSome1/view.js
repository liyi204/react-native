import React from 'react';
import { View, Text,Button } from 'react-native';

export default self => (
  <View>
    <View style={styles.container}>
      <Text style={{ fontSize: 17 }}>home111</Text>
      <Button title="login" onPress={self._goRouter.bind(self,'login')} />

      <Button title="registration" onPress={self._goRouter.bind(self,'registration')} />

      <Button title="hot products" onPress={self._goRouter.bind(self,'hot products')} />

      <Button title="usage statistics" onPress={self._goRouter.bind(self,'usage statistics')} />

      <Button title="active users" onPress={self._goRouter.bind(self,'active users')} />
      <Button title="purchase" onPress={self._goRouter.bind(self,'purchase')} />
      <Button title="partner access" onPress={self._goRouter.bind(self,'partner access')} />


      <Button title="Wealth" onPress={self._goRouter.bind(self,'Wealth')} />
      <Button title="Health" onPress={self._goRouter.bind(self,'Health')} />
      <Button title="Social" onPress={self._goRouter.bind(self,'Social')} />

      <Button title="Babylon" onPress={ self._goRouter.bind(self, 'Babylon') } />
      <Button title="Doctors" onPress={ self._goRouter.bind(self, 'Doctors') } />
      <Button title="Prenetics" onPress={ self._goRouter.bind(self, 'Prenetics') } />
      <Button title="UOB" onPress={ self._goRouter.bind(self, 'UOB') } />
      <Button title="OVO" onPress={ self._goRouter.bind(self, 'OVO') } />
      <Button title="MyDoc" onPress={ self._goRouter.bind(self, 'MyDoc') } />

      <Button title="ScreenSome1" onPress={self._goRouter.bind(self,'ScreenSome1')} />
      <Button title="ScreenSome2" onPress={self._goRouter.bind(self,'ScreenSome2')} />


      <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => self.setState({text})}
        />

      <Button title="search" color="red" onPress={self._search} />

    <Text style={{padding: 10, fontSize: 42}}>
      {self.state.scatterInfo}
    </Text>
    </View>
  </View>
);
