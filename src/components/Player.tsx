import * as React from 'react';
import {Helmet} from 'react-helmet';
import {Box} from "@chakra-ui/react";

const Player = () => {
    return (
        <Box as={'aside'} id={'buzzsprout-large-player-1776406'} mt={10}>
            <Helmet>
                <script type='text/javascript' charSet='utf-8'
                        src='https://www.buzzsprout.com/1776406.js?container_id=buzzsprout-large-player-1776406&player=large' async defer></script>
            </Helmet>
        </Box>
    )
}

export default Player