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
        },
        dark: {
// for later
        }
    },
});

export default theme;