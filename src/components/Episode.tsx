import * as React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import DOMPurify from 'dompurify';
import * as dayjs from 'dayjs';

const Episode = ({title, description, season_number, episode_number, published_at}) => {
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
    //     published_at
    // } =
    return (
        <Box p={5} shadow="md" borderWidth="1px" as={'article'}>
            <Heading as={'h3'} size="l" color={'primary.800'} fontStyle={'italic'}>Season {season_number}, Episode {episode_number} {'=>'} {title}</Heading>
            <Text mt={4} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}} />
            <Text as={'i'}>{dayjs(published_at).format('dddd, MMMM D, YYYY')}</Text>
        </Box>
    )
}

export default Episode;