import * as React from 'react';
import {Box, Heading, HStack, Text} from "@chakra-ui/react";
import * as dayjs from 'dayjs';
import xss from 'xss';

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
            <Box mt={4} dangerouslySetInnerHTML={{
                __html: xss(description)
            }}/>
            <Text as={'i'}>{dayjs(published_at).format('dddd, MMMM D, YYYY')}</Text>
            <HStack mt={12} spacing={['3px', '12px']}>{tags.length && tags.split(',').map(t => <Box borderWidth="1px"
                                                                                                    borderRadius="lg"
                                                                                                    overflow="hidden"
                                                                                                    padding={2}
                                                                                                    bg={"primary.bg"}
                                                                                                    key={t}><Text
                fontSize={'xs'} color={'white'}>{t}</Text></Box>)}</HStack>

        </Box>
    )
}

export default Episode;