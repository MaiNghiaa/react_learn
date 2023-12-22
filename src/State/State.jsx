import React, { Component } from "react";

export default class State extends Component {
  state = {
    status: false,
  };

  userLogin = {
    name: "hello",
    age: 18,
  };
  Login = () => {
    let newstate = {
      status: true,
    };
    this.setState(newstate);
  };
  renderLoginUser = () => {
    if (this.state.status) {
      return <div>{this.userLogin.name}</div>;
    } else {
      return <button onClick={() => this.Login()}>Dang nhap</button>;
    }
  };
  render() {
    return <div>{this.renderLoginUser()}</div>;
  }
}
