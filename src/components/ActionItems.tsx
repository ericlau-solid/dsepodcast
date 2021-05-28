import * as React from 'react';
import {Button, Flex} from "@chakra-ui/react";
import LinkedIn from "./LinkedIn";
import Spotify from "./Spotify";
import Stitcher from "./Stitcher";
import Rss from "./Rss";
import { Link } from 'gatsby';

const ActionItems = () => {
    return (
        <Flex flexWrap={"wrap"} as={'aside'}>
            <LinkedIn profileUrl={'https://www.linkedin.com/in/ericlau01/'}/>
            <Spotify/>
            <Stitcher/>
            <Rss/>
            <Link to="/player">
                <Button
                    size="sm"
                    rounded="md"
                    bg={["white", "white", "primary.bg", "primary.bg"]}
                    color={["primary.bg", "primary.bg", "white", "white"]}
                    _hover={{
                        bg: ["primary.text", "primary.text", "primary.text", "primary.text"],
                        color: ["primary.bg", "primary.bg", "primary.bg", "primary.bg"]
                    }}
                >
                    Web Player
                </Button>
            </Link>
        </Flex>
    );
}

export default ActionItems;