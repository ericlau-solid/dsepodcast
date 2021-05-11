import * as React from 'react';
import {Flex} from "@chakra-ui/react";
import LinkedIn from "./LinkedIn";
import Spotify from "./Spotify";
import Stitcher from "./Stitcher";
import Rss from "./Rss";

const ActionItems = () => {
    return (
        <Flex flexWrap={"wrap"} as={'aside'}>
            <LinkedIn profileUrl={'https://www.linkedin.com/in/ericlau01/'}/>
            <Spotify/>
            <Stitcher/>
            <Rss/>
        </Flex>
    );
}

export default ActionItems;