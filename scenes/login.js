import React, { Component } from 'react'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };

  }

  handleSubmit(event) {
    event.preventDefault();
    UserActions.login({
      username: this.state.username,
      password: this.state.password
    });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value});
  }

  updateUsername(event) {
    this.setState({ username: event.target.value});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.username} onChange={this.updateUsername}/>
        <input type="text" value={this.state.password} onChange={this.updatePassword}/>
      </form>
    )
  }
}
