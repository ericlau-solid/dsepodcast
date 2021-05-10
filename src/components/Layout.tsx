import * as React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import Hero from "./Hero";
import Navigation from './Navigation';
// @ts-ignore
import favicon from '../images/dselogo.ico';
import Helmet from 'react-helmet';
import "@fontsource/poppins/400.css"


const Footer = () => (
    <Flex as={'footer'} bg={'primary.bg'} color={'primary.text'} w={'100%'} mt={10} pt={3} pb={3} pr={[3, 9, 17, 37]}
          justifyContent={'end'} overflow="hidden">
        <Text fontSize={'xs'}>Sponsored by Brainy Butlers
            Solutions Ltd. Copyright © 2021</Text>
    </Flex>);

const Layout = ({children, heroConfig = {}}) => {
    return (
        <Flex
            direction="column"
            align="center"
            maxW={{xl: "1200px"}}
            m="0 auto"
            bgColor={'#FAF5FF'}
        >
            <Helmet>
                <link rel="icon" href={favicon}/>
            </Helmet>
            <Navigation/>
            {Object.keys(heroConfig).length > 0 && <Hero config={heroConfig}/>}
            {children}
            <Footer/>
        </Flex>
    )
}

export default Layout;