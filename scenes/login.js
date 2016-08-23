import React, { Component } from 'react';
import {View, TextInput, TouchableHighlight, StyleSheet, Text } from 'react-native';
import SessionReducer from '../reducer/session_reducer';

export default class SessionForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit() {
    SessionActions.login({
      username: this.state.username,
      password: this.state.password
    });
  }

  render() {
    return(
        <View>
          <TextInput
                 value={this.state.username}
                 onChangeText={(username) => this.setState({username: username})}
          />
          <TextInput
                 value={this.state.password}
                 onChangeText={(password) => this.setState({password: password})}
          />
          <TouchableHighlight
            onPress={this.handleSubmit}>
            <View>
              <Text>Submit</Text>
            </View>
          </TouchableHighlight>
        </View>
    )
  }
}
