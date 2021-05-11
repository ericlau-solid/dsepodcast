import * as React from "react";
import {Link} from 'gatsby';
import {Box, Button, Container, Flex, Heading, HStack, Stack, Text} from "@chakra-ui/react";
import {StaticImage} from "gatsby-plugin-image";
import LinkedIn from "./LinkedIn";
import Spotify from "./Spotify";
import Stitcher from "./Stitcher";
import Rss from "./Rss";
import ActionItems from "./ActionItems";

const Hero = ({
                  config, children,
                  ...rest
              }) => {
    const {
        title,
        subtitle,
        ctaLink,
        ctaText,
    } = config;
    return (
        <Flex
            as={'header'}
            align="top"
            justify={{base: "center", md: "space-around", xl: "space-between"}}
            direction={{base: "column-reverse", md: "row"}}
            wrap="nowrap"
            minH="30vh"
            px={8}
            mb={16}
            {...rest}
        >
            <Stack
                spacing={4}
                w={{base: "80%", md: "40%"}}
                align={["center", "center", "flex-start", "flex-start"]}
            >
                <Heading
                    as="h1"
                    size="2xl"
                    fontWeight="bold"
                    color="primary.800"
                    textAlign={["center", "center", "left", "left"]}
                >
                    {title}
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    color="primary.800"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={["center", "center", "left", "left"]}
                >
                    {subtitle}
                </Heading>
                <Link to={ctaLink}>
                    <Button
                        colorScheme="primary"
                        borderRadius="8px"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="md"
                    >
                        {ctaText}
                    </Button>
                </Link>
                <Container borderWidth="1px" borderRadius="lg" overflow="hidden" padding={2} bg={"primary.bg"}>
                    <Text
                        fontSize="s"
                        textAlign="left"
                        color="white"
                    >
                        {children}
                    </Text>
                </Container>
                <ActionItems />
            </Stack>
            <Box w={{base: "80%", sm: "60%", md: "50%"}} mb={{base: 12, md: 0}}>
                <StaticImage src={'../images/dsecover-rect.jpg'} size="100%" rounded="1rem" shadow="2xl"
                             alt={'Podcast cover - rectangle'}/>
            </Box>
        </Flex>
    );
}

export default Hero;
