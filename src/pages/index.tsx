import * as React from "react"
import {Helmet} from 'react-helmet';
import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import Layout from "../components/Layout";
import "@fontsource/poppins/400.css"

const theme = extendTheme({
    fonts: {
        heading: "Poppins",
        body: "Poppins",
    },
});


const Head = () => (
    <Helmet>
        <meta charSet="utf-8"/>
        <title>Diverse Software Engineers Podcast</title>
        <link rel="canonical" href="https://dsepodcast.com"/>
    </Helmet>
)

const Header = () => (<>Diverse Software Engineers Podcast</>);

// markup
const IndexPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <Head/>
            <Layout masthead={<Header/>}/>
        </ChakraProvider>
    )
}

export default IndexPage
