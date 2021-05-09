import {ChakraProvider} from "@chakra-ui/react";
import theme from "../theme";
import {Helmet} from 'react-helmet';
import Layout from "../components/Layout";
import * as React from "react";

const Head = () => (
    <Helmet htmlAttributes={{ lang : 'en' }}>
        <meta charSet="utf-8"/>
        <title>Best No. 1 Coaching | Diverse Software Engineers Podcast</title>
        <link rel="canonical" href="https://dsepodcast.com/coaching"/>
    </Helmet>
)

const heroConfig = {
    title: "Coaching | Diverse Software Engineers Podcast",
    subtitle:
        "Top Coaching Specific for Software Engineers",
    image: "https://source.unsplash.com/collection/404339/800x600",
    ctaText: "Get Free Consultation",
    ctaLink: "/subscribe"
};

// markup
const CoachingPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Head/>
            <Layout heroConfig={heroConfig}>
                <div>
                    Coaching - stay tuned.
                </div>
            </Layout>
        </ChakraProvider>
    )
}

export default CoachingPage