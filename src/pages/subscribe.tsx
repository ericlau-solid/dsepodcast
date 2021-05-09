import {Box, ChakraProvider, Container, Flex, Heading, Stack, Text} from "@chakra-ui/react";
import theme from "../theme";
import {Helmet} from 'react-helmet';
import Layout from "../components/Layout";
import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

const Head = () => (
    <Helmet htmlAttributes={{lang: 'en'}}>
        <meta charSet="utf-8"/>
        <title>How to Subscribe to Diverse Software Engineers Podcast</title>
        <link rel="canonical" href="https://dsepodcast.com/subscribe"/>
    </Helmet>
)

const DSETitle = () => (
    <Text color="primary.text" bg={"primary.bg"} pl={4} pr={4} as={'strong'}>Diverse Software Engineers</Text>)

// markup
const CoachingPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Head/>
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
                        w={{base: "80%", md: "60%"}}
                        align={["center", "center", "flex-start", "flex-start"]}
                    >
                        <Heading
                            as="h1"
                            size="xl"
                            fontWeight="bold"
                            color="primary.800"
                            textAlign={["center", "center", "left", "left"]}
                        >How to Subscribe to Diverse Software Engineers Podcast</Heading>
                        <Box as='section'>
                            <Heading
                                as="h2"
                                size="md"
                                color="primary.800"
                                opacity="0.8"
                                fontWeight="normal"
                                lineHeight={1.5}
                                textAlign={["center", "center", "left", "left"]}
                            >Apple Podcasts</Heading>
                            <StaticImage
                                src={'https://412924-1309603-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/how-to-subscribe-to-a-podcast-on-apple-podcasts-1-2048x873.png'}
                                alt={'how to subscribe to Diverse Software Engineers podcast on Apple Podcasts or iTunes'}/>
                            <Container>
                                <ol>
                                    <li>Tap ‘search' inside the Apple Podcasts app</li>
                                    <li>Type <DSETitle/> podcast into the search bar, and ensure ‘all
                                        podcasts'
                                        in
                                        selected
                                    </li>
                                    <li>Tap the podcast you'd like to subscribe to</li>
                                    <li>Tap the ‘subscribe' button, top-centre, beside the podcast
                                        artwork.
                                    </li>
                                    <li>You're now subscribed to the podcast!</li>
                                    <li>Tap library to see your current subscriptions and start
                                        listening.
                                    </li>
                                </ol>
                            </Container>
                        </Box>
                        <Box as='section'>
                            <Heading
                                as="h2"
                                size="md"
                                color="primary.800"
                                opacity="0.8"
                                fontWeight="normal"
                                lineHeight={1.5}
                                textAlign={["center", "center", "left", "left"]}
                            >Spotify</Heading>
                            <StaticImage
                                src={'https://412924-1309603-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/how-to-subscribe-to-a-podcast-on-spotify-1-2048x879.png'}
                                alt={'how to subscribe to Diverse Software Engineers podcast on Spotify'}/>
                            <Container>
                                <ol>
                                    <li>Click search inside the Spotify app</li>
                                    <li>Type <DSETitle/> podcast into the search bar</li>
                                    <li>Tap the ‘See all podcasts' link to see full podcasts, rather than single
                                        episodes
                                    </li>
                                    <li>Click on your podcast of choice</li>
                                    <li>Tap on the ‘follow' link, top left, right below the podcast
                                        artwork
                                    </li>
                                    <li>Success! You're subscribed.</li>
                                    <li>To listen, tap ‘Your Library' &gt; Podcasts &gt; Shows, and choose a
                                        show to start playing
                                    </li>
                                </ol>
                            </Container>
                        </Box>
                        <Box as='section'>
                            <Heading
                                as="h2"
                                size="md"
                                color="primary.800"
                                opacity="0.8"
                                fontWeight="normal"
                                lineHeight={1.5}
                                textAlign={["center", "center", "left", "left"]}
                            >Google Podcasts</Heading>
                            <StaticImage
                                src={'https://412924-1309603-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/how-to-subscribe-to-a-podcast-in-google-podcasts.png'}
                                alt={'how to subscribe to Diverse Software Engineers podcast on Google Podcasts'}/>
                            <Container>
                                <ol>
                                    <li>Click the search icon (magnifying glass) on the top left of the app home
                                        screen
                                    </li>
                                    <li>Type <DSETitle/> podcast</li>
                                    <li>Search results show 1 recommended show first, then episodes, then a lists of
                                        podcasts below.
                                    </li>
                                    <li>Choose a podcast to subscribe to from the ‘show results' at the bottom</li>
                                    <li>Click the subscribe button on the top left, below the podcast title</li>
                                    <li>Success! You're now subscribed</li>
                                    <li>To listen, navigate to the app home page, choose a podcast from the top section
                                        and click play on an episode
                                    </li>
                                </ol>
                            </Container>
                        </Box>
                    </Stack>
                </Flex>

            </Layout>
        </ChakraProvider>
    )
}

export default CoachingPage