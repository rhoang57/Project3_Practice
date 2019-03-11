import React, { Component } from "react";
import "./style.css";

class LastTextPreview extends Component {
    render() {
        return (
              <div className="preview-text"><i>{this.props.previewtext}</i></div>
        )
    }
  }
  
  export default LastTextPreview;