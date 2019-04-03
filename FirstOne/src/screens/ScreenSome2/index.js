import { Component } from 'react';
import view from './view';

export default class ScreenSome2 extends Component {
  static navigationOptions = {
    title: 'modal',
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  
  _goRouter(router){
    this.navigation.navigate(router);
  }

  render() {
    return view(this);
  }
}
