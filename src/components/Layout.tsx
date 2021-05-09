import * as React from 'react';
import {Flex} from "@chakra-ui/react";
import Masthead from "./Masthead";
import Navigation from './Navigation';


const Footer = () => (<>Sponsored by Brainy Butlers Solutions Ltd. Copyright 2021</>);

const Layout = ({children}) => {
    return (
        <Flex
            direction="column"
            align="center"
            maxW={{xl: "1200px"}}
            m="0 auto"
        >
            <Navigation/>
            <header><Masthead/></header>
            <main>{children}</main>
            <footer><Footer/></footer>
        </Flex>
    )
}

export default Layout;