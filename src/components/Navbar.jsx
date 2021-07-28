import React, { Component } from "react";
import Search from "./Search";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../static/img/coursera.svg";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-3">
                <img src={logo} />
              </div>
              <div className="col-3">
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Explore
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <Search />
              </div>
            </div>
          </div>
          <div className="col">
            <Login login={this.props.login} />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
