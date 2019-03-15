import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import AddText from "../components/AddText";
import "./textEditorStyle.css";


class TextEditor extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col size="md-6">
                <AddText />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default TextEditor;
