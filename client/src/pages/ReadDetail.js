import React, { Component } from "react";
import CompleteStory from "../components/CompleteStory";
import {Container, Row, Col} from "../components/Grid";



class ReadDetail extends Component {
    render() {
        return (
            <>
            <Container fluid>
                <Row>
                <Col size="12">
                <CompleteStory completedstory={"This is a complete story."} />
                </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default ReadDetail;