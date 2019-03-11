import React, { Component } from "react";
import "./style.css";
import {TextArea, FormBtn} from "../Form";
import LastTextPreview from "../LastTextPreview";


class AddText extends Component {
  render() {
      return (
            <>
            <div className="add-mode-div">
              <LastTextPreview previewtext={"test"} />
              <TextArea />
              <FormBtn children={"submit"}/>
              </div>
              </>
      )
  }
}

export default AddText;