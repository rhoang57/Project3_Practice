import React, { Component } from "react";
import "./style.css";
import { Input, TextArea, FormBtn } from "../Form";
import LastTextPreview from "../LastTextPreview";


class AddText extends Component {
  state = {
    blocks: [],
    title: "",
    excerpt: "",
    wordCount: "",
    authorCount: "",
    lastexcerpt: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
      return (
            <>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <LastTextPreview previewtext={"test"}/>
              <TextArea
                value={this.state.excerpt}
                onChange={this.handleInputChange}
                name="excerpt"
                placeholder="Add your portion of the story here (between 10 and 150 words)"
              />
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Block
              </FormBtn>
            </form>
              </>
      )
  }
}

export default AddText;