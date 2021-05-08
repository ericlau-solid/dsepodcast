import * as React from 'react';
import {Container, Stack} from "@chakra-ui/react";

const Layout = ({masthead}) => {
    return (
        <Container>
            <Stack>
                <header>{masthead}</header>
            </Stack>
        </Container>
    )
}

export default Layout;