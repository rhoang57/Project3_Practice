import React, { Component } from "react";
import "./style.css";
import {Col} from "../Grid";

class NewBlockPreview extends Component {
  render() {
      return (
        <Col size="md-4">
          <div className="card">
            <div className="new-card-title"><h2>START A NEW STORY<span className="add-block"><a href={this.props.newblocklink} className="add-block">    +</a></span></h2></div>
            <div className="preview-text"><br /> <br /> <br /> <br /></div>
            <div className="container">
            <h6 className="word-count">Word Count: 0</h6>
            <h6 className="contributor-count">No. of Contributors: 0</h6>
            </div>
          </div>
          </Col>
      )
  }
}

export default NewBlockPreview;
