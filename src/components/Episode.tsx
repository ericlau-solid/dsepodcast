import * as React from 'react';
import {Box, Heading, HStack, Text} from "@chakra-ui/react";
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import xss from 'xss';
import {Link} from "gatsby";
import calculateTranscriptUrls from './calculateTranscriptUrls';

dayjs.extend(relativeTime);

const Episode = ({title, description, season_number, episode_number, published_at, tags, guid}) => {
    return (
        <Box p={5} shadow="md" borderWidth="1px" as={'article'}>
            <Link to={calculateTranscriptUrls(guid).websiteLink}><Heading as={'h3'} size="l" color={'primary.800'} fontStyle={'italic'}>Season {season_number},
                Episode {episode_number} {'=>'} {title}</Heading></Link>
            <Box mt={4} dangerouslySetInnerHTML={{
                __html: xss(description)
            }}/>
            <hr />
            <Text as={'i'}>Published {dayjs(published_at).fromNow()}</Text>
            <HStack mt={12} spacing={['3px', '12px']}>
                {tags.length && tags.split(',').map(
                t => <Box borderWidth="1px"
                          borderRadius="lg"
                          overflow="hidden"
                          padding={2}
                          bg={"primary.bg"}
                          key={t}><Text
                    fontSize={'xs'} color={'white'}>{t}</Text></Box>)}
            </HStack>
        </Box>
    )
}

export default Episode;