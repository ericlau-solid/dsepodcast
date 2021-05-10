import * as React from 'react';
import {Box, Heading, Stack, Text} from "@chakra-ui/react";
import {useBuzzsproutEpisodes} from "./useGatsbyStaticQueries";
import Episode from "./Episode";

const LatestEpisodes = () => {
    const latestEpisodesData = useBuzzsproutEpisodes();

    return (
        <Box w={'100%'}>
            <Heading as={'h2'} bg={'primary.bg'} color={'primary.text'} mb={2} pt={3} pb={3}
                  pl={5} overflow="hidden" size={'md'} fontWeight={'bold'} textAlign={'left'}>Latest Episodes</Heading>
            <Stack as={'section'} spacing={[3, 3, 8, 8]}>
                {latestEpisodesData.map(e => <Episode key={e.id} {...e} />)}
            </Stack>
        </Box>
    );
};

export default LatestEpisodes;