import React, { Component } from "react";
import NewBlockPreview from "../components/NewBlockPreview";
import WriteCard from "../components/WriteCard";
import { Container, Row, Col } from "../components/Grid";

class BrowsePage extends Component {
    
    state = {
        pieces: []
      }
    
      componentDidMount() {
        this.loadiUnfnishedPieces();
      }
    
      loadUnfinishedPieces() {
        API.getUnfinishedPieces()
          .then(res => this.setState({ pieces: res.data }));
      }

render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col size="md-4">
              <NewBlockPreview newblocklink={"/write/new"} />
            </Col>
            <Col size="md-4">
            {this.state.pieces.map(piece => (
          <WriteCard
            id={piece.id}
            key={piece.id}
            title={piece.title}
            excerpt={piece.excerpt}
            authorCount={piece.authorCount}
          />
        ))}
            </Col>
            
          </Row>
        </Container>
      </>
    );
  }
}

export default BrowsePage;
