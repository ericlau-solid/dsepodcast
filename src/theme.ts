import {extendTheme} from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
        body: {
            // color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('#fdfdfd', '#141214')(props),
        },
    }),
};

const components = {
    Drawer: {
        // setup light/dark mode component defaults
        baseStyle: props => ({
            dialog: {
                bg: mode('#fdfdfd', '#141214')(props),
            },
        }),
    },
};

const theme = extendTheme({
    styles,
    fonts: {
        heading: "Poppins",
        body: "Poppins",
    },
    colors: {
        primary: {
            bg: "#542583",
            // ...
            text: "#fef23a",
            50: "#fef23a",
            100: "#fef23a",
            200: "#fef23a",
            300: "#fef23a",
            400: "#fef23a",
            500: "#805AD5",
            600: "#542583",
            700: "#542583",
            800: "#542583",
            900: "#542583",
        },
        dark: {
// for later
        }
    },
});

export default theme;