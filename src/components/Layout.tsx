import * as React from 'react';
import {Container, Flex} from "@chakra-ui/react";
import Hero from "./Hero";
import Navigation from './Navigation';
// @ts-ignore
import favicon from '../images/dselogo.ico';
import Helmet from 'react-helmet';


const Footer = () => (
    <Container bg={'primary.bg'} color={'primary.text'} w={'100%'} mt={10} pt={3} pb={3} borderWidth="1px" borderRadius="lg" overflow="hidden">Sponsored by Brainy Butlers
        Solutions Ltd. Copyright © 2021</Container>);

const Layout = ({children, heroConfig = {}}) => {
    return (
        <Flex
            direction="column"
            align="center"
            maxW={{xl: "1200px"}}
            m="0 auto"
        >
            <Helmet>
                <link rel="icon" href={favicon}/>
            </Helmet>
            <Navigation/>
            {Object.keys(heroConfig).length > 0 && <Hero config={heroConfig}/>}
            {children}
            <footer><Footer/></footer>
        </Flex>
    )
}

export default Layout;