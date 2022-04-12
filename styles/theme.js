import { DarkMode, extendTheme, LightMode } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      primary: "#2CF6B3",
      secondary: "#0EB57D",
      background: "#131B23",
    },
  },
  global: (props) => ({
    body: {
      color: DarkMode("#ffff", "#ffff")(props),
      bg: "#fff",
    },
  }),
  fonts: {
    body: '"Open Sans", "Inter", sans-serif',
  },
});

export default theme;
