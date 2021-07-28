import React, { Component } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

class App extends Component {
  state = {
    login: false,
  };
  render() {
    return (
      <div>
        <Navbar isLogin={this.state.login} />
        <Banner />
      </div>
    );
  }
}

export default App;
