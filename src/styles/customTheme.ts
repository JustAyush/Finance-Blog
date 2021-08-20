import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    // body: "Open Sans, sans-serif",
    // heading: "Open Sans, serif",
  },
  colors: {
    ...theme.colors,
    primary: "#0c74db",
    text: "#415484",
  },
  styles: {
    global: {
      "html, body": {
        bg: "white",
        fontFamily: "Lato",
        fontSize: "16px",
        color: "#415484",
      },
    },
  },
  components: {
    /** Example */
    // Button: {
    //   baseStyle: {
    //     borderRadius: 24,
    //   },
    // },
  },
});

export default customTheme;
