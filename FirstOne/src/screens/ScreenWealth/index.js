import { Component } from 'react';
import view from './view';

export default class ScreenWealth extends Component {
  static navigationOptions = {
    title: 'Wealth',
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return view(this);
  }
}
