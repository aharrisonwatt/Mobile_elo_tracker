import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MyScene extends Component {

  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}

MyScene.defaultProps = {
  title: "Andrew"
};
