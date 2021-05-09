import * as React from "react";
import {Link} from 'gatsby';
import {Box, Button, Flex, Heading, Stack, Text} from "@chakra-ui/react";
import {StaticImage} from "gatsby-plugin-image";

const Hero = ({
                  config,
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
                    size="xl"
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
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding={2} bg={"primary.bg"}>
                    <Text
                        fontSize="s"
                        textAlign="left"
                        color="primary.text"
                    >
                        Diverse Software Engineers Podcast is the definitive podcast for learning the "soft" skills that
                        are
                        essential for gaining fulfilling work, and keep them coming. Through the lens of a male
                        Chinese-Canadian expert, and a female Iranian-Canadian up-and-coming engineer, they will empower
                        you
                        to break some glass ceilings, and build software that delights.
                    </Text>
                </Box>
            </Stack>
            <Box w={{base: "80%", sm: "60%", md: "50%"}} mb={{base: 12, md: 0}}>
                <StaticImage src={'../images/dsecover-rect.jpg'} size="100%" rounded="1rem" shadow="2xl"
                             alt={'Podcast cover - rectangle'}/>
            </Box>
        </Flex>
    );
}

export default Hero;
