import * as React from "react"
import {Helmet} from 'react-helmet';
import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import Layout from "../components/Layout";
import "@fontsource/poppins/400.css"
import theme from "../theme";


const Head = () => (
    <Helmet>
        <meta charSet="utf-8"/>
        <title>Diverse Software Engineers Podcast</title>
        <link rel="canonical" href="https://dsepodcast.com"/>
    </Helmet>
)

// markup
const IndexPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Head/>
            <Layout>
                <div>
                    Main content
                </div>
            </Layout>
        </ChakraProvider>
    )
}

export default IndexPage