import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    // body: "Open Sans, sans-serif",
    // heading: "Open Sans, serif",
  },
  colors: {
    ...theme.colors,
    primary: {
      DEFAULT: "#0C74DB",
      "50": "#D0E6FC",
      "100": "#B8DAFB",
      "200": "#88C0F8",
      "300": "#57A7F6",
      "400": "#278DF3",
      "500": "#0C74DB",
      "600": "#095AAB",
      "700": "#07417A",
      "800": "#04274A",
      "900": "#010E1A",
    },
    text: {
      DEFAULT: "#415484",
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "white",
        fontFamily: "Lato",
        fontSize: "18px",
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
