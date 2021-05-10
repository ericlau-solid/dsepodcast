import * as React from 'react';
import {Box, Heading, HStack, Text} from "@chakra-ui/react";
import * as DOMPurify from 'isomorphic-dompurify';
import * as dayjs from 'dayjs';
import {Helmet} from 'react-helmet';

const Episode = ({title, description, season_number, episode_number, published_at, tags}) => {
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
            <Heading as={'h3'} size="l" color={'primary.800'} fontStyle={'italic'}>Season {season_number},
                Episode {episode_number} {'=>'} {title}</Heading>
            <Text mt={4} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}}/>
            <Text as={'i'}>{dayjs(published_at).format('dddd, MMMM D, YYYY')}</Text>
            <div id="buzzsprout-player-8475794"></div>
            <Helmet>
                <script
                    src="https://www.buzzsprout.com/1776406/8475794-snippet-do-you-dare-to-suck.js?container_id=buzzsprout-player-8475794&player=small"
                    type="text/javascript" charSet="utf-8" defer></script>
            </Helmet>
            <HStack mt={12} spacing={['3px', '12px']}>{tags.split(',').map(t => <Box borderWidth="1px" borderRadius="lg"
                                                                                     overflow="hidden" padding={2}
                                                                                     bg={"primary.bg"} key={t}><Text
                 fontSize={'xs'} color={'white'}>{t}</Text></Box>)}</HStack>

        </Box>
    )
}

export default Episode;