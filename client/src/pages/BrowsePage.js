import React, { Component } from "react";
import NewBlockPreview from "../components/NewBlockPreview";
import BlockPreview from "../components/BlockPreview";
import {Container, Row} from "../components/Grid";

class BrowsePage extends Component {
    render() {
        return (
            <>
            <Container fluid>
                <Row>
                    <NewBlockPreview newblocklink={"/write/0"} />
                    <BlockPreview newblocklink={"/write/1"} title={"Last Night I Went"} previewtext={"It never occured to Rachel that staying up all night would lead to her demise. She was so sick to his stomach the next day."} wordcount={25} contributorcount={1} />
                    <BlockPreview newblocklink={"/write/2"} title={"If Ever in Trouble"} previewtext={"Steve just did it! He never thought he would actually do such a thing. Nonetheless, he had completed the worse thing he had ever done."} wordcount={31} contributorcount={1} />
                    <BlockPreview newblocklink={"/write/3"} title={"Strawberry and Mail"} previewtext={"Two things you never thought would be in the same sentence. Was it weird? No one else seemed to think so. What was going on?"} wordcount={25} contributorcount={2} />
                    <BlockPreview newblocklink={"/write/4"} title={"Almost Done"} previewtext={"There were only two weeks of class remaining. It had to be done now. There could not be any hesitation. Any mistake would have beenn brutal."} wordcount={75} contributorcount={3} />
                    <BlockPreview newblocklink={"/write/5"} title={"They Met at a Traffic Light"} previewtext={"She just stared at him for a full minute. The light turned green, but she did not notice. It was as though time had froze."} wordcount={60} contributorcount={4} />
                </Row>
            </Container>
            </>
        )
    }
}

export default BrowsePage;