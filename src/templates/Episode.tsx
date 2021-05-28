import {Box, ChakraProvider, Flex, Heading, Stack} from "@chakra-ui/react";
import theme from "../theme";
import {Helmet} from 'react-helmet';
import Layout from "../components/Layout";
import * as React from "react";
import ActionItems from "../components/ActionItems";
import xss from 'xss';

const Head = ({title, season_number, episode_number}) => (
    <Helmet htmlAttributes={{lang: 'en'}}>
        <meta charSet="utf-8"/>
        {<title>{title} Transcript - Diverse Software Engineers Podcast</title>}
        <link rel="canonical" href="https://dsepodcast.com/transcript/"/>
    </Helmet>
)

const Episode = (props) => {
    const {pageContext} = props;
    const {season_number, episode_number, title, guid, transcript} = pageContext;
    return (
        <ChakraProvider theme={theme}>
            <Head {...pageContext}/>
            <Layout>
                <Flex
                    as={'main'}
                    align="top"
                    justify={{base: "center", md: "space-around", xl: "space-between"}}
                    direction={{base: "column-reverse", md: "row"}}
                    wrap="nowrap"
                    minH="30vh"
                    px={8}
                    mb={16}
                >
                    <Stack
                        spacing={4}
                        w={{base: "95%", md: "70%"}}
                        align={["center", "center", "flex-start", "flex-start"]}
                    >
                        <Heading
                            as="h1"
                            size="xl"
                            fontWeight="bold"
                            color="primary.800"
                            textAlign={["center", "center", "left", "left"]}
                        >{season_number}:{episode_number} -  {title}</Heading>
                        <ActionItems/>
                        <Heading as={'h2'}>Transcript</Heading>
                        <Box as={'article'} mt={4} dangerouslySetInnerHTML={{
                            __html: xss(transcript, {
                                onIgnoreTag: (tag, html, options) => {
                                    if (tag === 'time') {
                                        // do not filter its attributes
                                        return html;
                                    }
                                }
                            })
                        }} />
                    </Stack>
                </Flex>

            </Layout>
        </ChakraProvider>
    )
}

export default Episode;
