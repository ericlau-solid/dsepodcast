import * as React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";

const Episode = ({title, desc}) => {
    return (
        <Box p={5} shadow="md" borderWidth="1px">
            <Heading as={'article'} fontSize="l">{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    )
}

export default Episode;