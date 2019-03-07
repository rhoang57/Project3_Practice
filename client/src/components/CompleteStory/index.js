import React, {Component} from 'react';
import './style.css';
import {Container, Row, Col} from '../Grid';

class CompleteStory extends Component {
    render() {
        return (
            <>
            <Container fluid>
                <Row>
                <Col size="12">
                {this.props.completedstory}
                </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default CompleteStory;