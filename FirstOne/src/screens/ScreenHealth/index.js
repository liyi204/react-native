import { Component } from 'react';
import view from './view';

export default class ScreenHealth extends Component {
  static navigationOptions = {
    title: 'Health',
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return view(this);
  }
}
