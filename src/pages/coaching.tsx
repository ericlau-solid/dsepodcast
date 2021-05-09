import {ChakraProvider} from "@chakra-ui/react";
import theme from "../theme";
import {Helmet} from 'react-helmet';
import Layout from "../components/Layout";
import * as React from "react";

const Head = () => (
    <Helmet>
        <meta charSet="utf-8"/>
        <title>Coaching | Diverse Software Engineers Podcast</title>
        <link rel="canonical" href="https://dsepodcast.com/coaching"/>
    </Helmet>
)

// markup
const CoachingPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Head/>
            <Layout>
                <div>
                    Coaching - stay tuned.
                </div>
            </Layout>
        </ChakraProvider>
    )
}

export default CoachingPage