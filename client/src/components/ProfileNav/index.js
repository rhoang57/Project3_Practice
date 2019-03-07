import React, { Component } from "react";
import "./style.css";

class ProfileNav extends Component {
    render() {
        return (
          <div className="login-div">
              <a href={this.props.link} className="login-link"><u>login</u></a>
          </div>
        )
    }
  }
  
  export default ProfileNav;
