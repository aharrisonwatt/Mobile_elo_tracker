import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export default class MyScene extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
      />
    )
  }
}

MyScene.defaultProps = {
  title: "Andrew"
};
