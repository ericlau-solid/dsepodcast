import * as React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import DOMPurify from 'dompurify';

const Episode = ({title, description}) => {
    // const {
    //     title,
    //     description,
    //     audio_url,
    //     artist,
    //     duration,
    //     episode_number,
    //     season_number,
    //     summary,
    //     tags,
    //     total_plays,
    //     id
    // } =
    return (
        <Box p={5} shadow="md" borderWidth="1px" as={'article'}>
            <Heading as={'h3'} size="l" color={'primary.800'} fontStyle={'italic'}>{title}</Heading>
            <Text mt={4} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}} />
        </Box>
    )
}

export default Episode;