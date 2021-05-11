import {Box, ChakraProvider, Flex, Heading, Stack} from "@chakra-ui/react";
import theme from "../theme";
import {Helmet} from 'react-helmet';
import Layout from "../components/Layout";
import * as React from "react";
import ActionItems from "../components/ActionItems";
import Player from "../components/Player";

const Head = () => (
    <Helmet htmlAttributes={{lang: 'en'}}>
        <meta charSet="utf-8"/>
        <title>Web Player | Diverse Software Engineers Podcast</title>
        <link rel="canonical" href="https://dsepodcast.com/player"/>
    </Helmet>
)

// markup
const PlayerPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Head/>
            <Layout>
                <Box
                    as={'main'}
                    px={8}
                    mb={16}
                    w={['90%', '90%', '70%', '70%']}
                >
                    <Stack
                        spacing={4}
                        align={["center", "center", "flex-start", "flex-start"]}
                    >
                        <Heading
                            as="h1"
                            size="xl"
                            fontWeight="bold"
                            color="primary.800"
                            textAlign={["center", "center", "left", "left"]}
                        >DSE Web Player</Heading>
                        <ActionItems/>
                    </Stack>
                    <Player/>
                </Box>
            </Layout>
        </ChakraProvider>
    )
}

export default PlayerPage