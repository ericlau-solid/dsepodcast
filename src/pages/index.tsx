import * as React from "react"
import {Helmet} from 'react-helmet';
import {ChakraProvider, Flex} from "@chakra-ui/react"
import Layout from "../components/Layout";
import LatestEpisodes from "../components/LatestEpisodes";
import theme from "../theme";


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

// markup
const IndexPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Head/>
            <Layout heroConfig={heroConfig}>
                <Flex as={'main'}>
                    <LatestEpisodes/>
                </Flex>
            </Layout>
        </ChakraProvider>
    )
}

export default IndexPage
