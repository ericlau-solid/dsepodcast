import {ChakraProvider} from "@chakra-ui/react";
import theme from "../theme";
import {Helmet} from 'react-helmet';
import Layout from "../components/Layout";
import * as React from "react";

const Head = () => (
    <Helmet htmlAttributes={{lang: 'en'}}>
        <meta charSet="utf-8"/>
        <title>Best Consulting | Diverse Software Engineers Podcast | No. 1</title>
        <link rel="canonical" href="https://dsepodcast.com/consult"/>
    </Helmet>
)

const heroConfig = {
    title: "Coaching - Free 30 minutes for Subscribers",
    subtitle:
        "Top Consulting - Specifically for You",
    ctaText: "Get Free Consultation",
    ctaLink: "https://www.linkedin.com/in/ericlau01/"
};

const HeroContent = () => (
    <>
        Contact Eric Lau on LinkedIn to schedule a free 30 minute consultation session. Let him know you are a podcast
        subscriber!
    </>
)

// markup
const CoachingPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Head/>
            <Layout heroConfig={heroConfig} heroContent={<HeroContent/>}>
            </Layout>
        </ChakraProvider>
    )
}

export default CoachingPage