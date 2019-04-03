import { Component } from 'react';
import view from './view';

export default class ScreenSocial extends Component {
  static navigationOptions = {
    title: 'Social',
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return view(this);
  }
}
