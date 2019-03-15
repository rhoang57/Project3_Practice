import React, { Component } from "react";
import NewBlockPreview from "../components/NewBlockPreview";
import BlockPreview from "../components/BlockPreview";
import { Container, Row, Col } from "../components/Grid";

class BrowsePage extends Component {
render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col size="md-4">
              <NewBlockPreview newblocklink={"/write/new"} />
            </Col>
            <Col size="md-4">
              <BlockPreview
                newBlockLink={"/write/1"}
                title={"Last Night I Went"}
                excerpt={
                  "It never occured to Rachel that staying up all night would lead to her demise. She was so sick to his stomach the next day."
                }
                wordCount={25}
                authorCount={1}
              />
            </Col>
            <Col size="md-4">
              <BlockPreview
                newBlockLink={"/write/2"}
                title={"If Ever in Trouble"}
                excerpt={
                  "Steve just did it! He never thought he would actually do such a thing. Nonetheless, he had completed the worse thing he had ever done."
                }
                wordCount={31}
                authorCount={1}
              />
            </Col>
            <Col size="md-4">
              <BlockPreview
                newBlockLink={"/write/3"}
                title={"Strawberry and Mail"}
                excerpt={
                  "Two things you never thought would be in the same sentence. Was it weird? No one else seemed to think so. What was going on?"
                }
                wordCount={25}
                authorCount={2}
              />
            </Col>
            <Col size="md-4">
              <BlockPreview
                newBlockLink={"/write/4"}
                title={"Almost Done"}
                excerpt={
                  "There were only two weeks of class remaining. It had to be done now. There could not be any hesitation. Any mistake would have beenn brutal."
                }
                wordCount={75}
                authorCount={3}
              />
            </Col>
            <Col size="md-4">
              <BlockPreview
                newBlockLink={"/write/5"}
                title={"They Met at a Traffic Light"}
                excerpt={
                  "She just stared at him for a full minute. The light turned green, but she did not notice. It was as though time had froze."
                }
                wordCount={60}
                authorCount={4}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BrowsePage;
