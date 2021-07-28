import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    const isLogin = this.props.login;
    let button;
    if (isLogin) {
      button = (
        <React.Component>
          <a href="#">Login</a>
          <button type="button" className="btn btn-primary">
            Join for Free
          </button>
        </React.Component>
      );
    } else {
      button = <span>James</span>;
    }

    return <div>{button}</div>;
  }
}

export default Login;
