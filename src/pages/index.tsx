import * as React from "react"
import {Helmet} from 'react-helmet';
import {ChakraProvider, Flex, VStack} from "@chakra-ui/react"
import Layout from "../components/Layout";
import LatestEpisodes from "../components/LatestEpisodes";
import theme from "../theme";
import Player from "../components/Player";


const Head = () => (
    <Helmet htmlAttributes={{lang: 'en'}}>
        <meta charSet="utf-8"/>
        <meta name="description"
              content="Diverse Software Engineers Podcast is the definitive podcast for learning the soft skills that are essential for gaining fulfilling work, and keep them coming. We empower you to break some glass ceilings, and build software that delights. Subscribe today!"/>
        <meta name="author" content="Eric Lau"/>
        <title>Latest Diverse Software Engineers Podcast Episodes</title>
        <link rel="canonical" href="https://dsepodcast.com"/>
    </Helmet>
)

const heroConfig = {
    title: "Diverse Software Engineers Podcast",
    subtitle:
        "Available on Apple Podcasts, Spotify, Google, Stitcher, and more!",
    ctaText: "Subscribe now",
    ctaLink: "/subscribe"
};

const HeroContent = () => (
    <>
        Diverse Software Engineers Podcast is the definitive podcast for learning the "soft" skills that
        are
        essential for gaining fulfilling work, and keep them coming. Through the lens of consultant Eric Lau,
        and Iranian-Canadian up-and-coming engineer Fatima Agheli, we will empower
        you to break some glass ceilings, and build software that delights.
    </>
)

// markup
const IndexPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Head/>
            <Layout heroConfig={heroConfig} heroContent={<HeroContent />}>
                <VStack as={'main'} w={['90%', '80%', '70%','70%']} >
                    <LatestEpisodes/>
                    <Player />
                </VStack>
            </Layout>
        </ChakraProvider>
    )
}

export default IndexPage
