import * as React from 'react';
import {Box, Container, Flex} from "@chakra-ui/react";
import Hero from "./Hero";
import Navigation from './Navigation';


const Footer = () => (<Container bg={'primary.bg'} color={'primary.text'} w={'100%'} mt={10} pt={3} pb={3}>Sponsored by Brainy Butlers Solutions Ltd. Copyright © 2021</Container>);

const Layout = ({children, heroConfig}) => {
    return (
        <Flex
            direction="column"
            align="center"
            maxW={{xl: "1200px"}}
            m="0 auto"
        >
            <Navigation/>
            <Hero config={heroConfig}/>
            <main>{children}</main>
            <footer><Footer/></footer>
        </Flex>
    )
}

export default Layout;