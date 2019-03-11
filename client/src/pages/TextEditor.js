import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import AddText from "../components/AddText";

class TextEditor extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col size="12">
                <AddText lastblocktext={"Wednesday's court filing notes that since the preliminary injunction was issued, the government has worked with a steering committee regarding the status of deported parents who have children remaining in federal care. The ACLU helped lead the committee, which reached out to all the parents who had been deported."} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default TextEditor;
