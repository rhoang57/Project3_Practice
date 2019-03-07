import React, {Component} from "react";
import "./style.css";
import {Col} from "../Grid";

class WritingArea extends Component {
  render() {
    return (
    <>
        <Col size="12">
          <div className="last-block-text">{this.props.lastblocktext}</div>
        </Col>
        <Col size="12">
        <form action="/action_page.php" id="writerstext">
        </form>
        <textarea rows="4" cols="50" name="comment" form="writerstext">
Enter your text here...</textarea><input type="submit" />
        </Col>
      </>
    )
  }
}

export default WritingArea;
