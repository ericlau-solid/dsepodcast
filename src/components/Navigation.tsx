import * as React from 'react';
import {useState} from 'react';
import {Box, Button, Flex, Text} from "@chakra-ui/react";
import Logo from './Logo';
import {faEllipsisV, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'gatsby';

const MenuItem = ({children, isLast = false, to = "/", ...rest}) => {
    return (
        <Link to={to}>
            <Text
                mb={{base: isLast ? 0 : 8, sm: 0}}
                mr={{base: 0, sm: isLast ? 0 : 8}}
                display="block"
                {...rest}
            >
                {children}
            </Text>
        </Link>
    );
};

const Navigation = (props) => {
    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow(!show);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["primary.bg", "primary.bg", "transparent", "transparent"]}
            color={["primary.text", "primary.text", "primary.bg", "primary.bg"]}
            {...props}
        >
            <Flex align="center">
                <Logo
                    w="60px"
                />
            </Flex>
            <Box display={{base: "block", md: "none"}} onClick={toggleMenu}>
                {show ? <FontAwesomeIcon icon={faWindowClose}/> : <FontAwesomeIcon icon={faEllipsisV}/>}
            </Box>
            <Box
                display={{base: show ? "block" : "none", md: "block"}}
                flexBasis={{base: "100%", md: "auto"}}
            >
                <Flex
                    align="center"
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    <MenuItem to="/">Home</MenuItem>
                    {/*<MenuItem to="/coaching">Coaching</MenuItem>*/}
                    {/*<MenuItem to="/consulting">Consulting</MenuItem>*/}
                    {/*<MenuItem to="/why">Why</MenuItem>*/}
                    <MenuItem to="/subscribe" isLast>
                        <Button
                            size="sm"
                            rounded="md"
                            bg={["white", "white", "primary.bg", "primary.bg"]}
                            color={["primary.bg", "primary.bg", "white", "white"]}
                            _hover={{
                                bg: ["primary.text", "primary.text", "primary.text", "primary.text"],
                                color: ["primary.bg", "primary.bg", "primary.bg", "primary.bg"]
                            }}
                        >
                            Subscribe
                        </Button>
                    </MenuItem>
                </Flex>
            </Box>
        </Flex>
    );
}

export default Navigation;