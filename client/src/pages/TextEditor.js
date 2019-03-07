import React, { Component } from 'react';
import {Container, Row, Col} from '../components/Grid';
import WritingArea from '../components/WritingArea';



class TextEditor extends Component {
    render() {
        return (
            <>
            <Container fluid>
                <Row>
                    <WritingArea />
                </Row>
            </Container>
            </>
        )
    }
}

export default TextEditor;