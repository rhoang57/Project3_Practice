import React, { Component } from "react";
import "./style.css";
import {Col} from "../Grid";

class BlockPreview extends Component {
  render() {
      return (
        <Col size="md-4">
          <div className="card">
            <div className="card-title"><h3><i>{this.props.title}</i><span className="add-block"><a href={this.props.newblocklink} className="add-block"><i className="fas fa-keyboard"></i></a></span></h3></div>
            <div className="preview-text"><i>{this.props.previewtext}</i></div>
            <div className="container">
            <h6 className="word-count">Word Count:  {this.props.wordcount}</h6>
            <h6 className="contributor-count">No. of Contributors:  {this.props.contributorcount}</h6>
            </div>
          </div>
          </Col>
      )
  }
}

export default BlockPreview;
