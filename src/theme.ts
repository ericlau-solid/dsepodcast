import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
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