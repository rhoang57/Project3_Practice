import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import AddText from "../components/AddText";


class TextEditor extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col size="md-12">
                <AddText />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default TextEditor;
