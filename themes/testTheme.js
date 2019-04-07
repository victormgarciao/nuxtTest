import { CURVE } from "../constants/theme";

export const theme = () => ({
    palette: {
        headerBackground: "#fff",
        headerForeground: "#0091d3",

        primary: "#0091d3",
        secondary: "#E91E63",
        tertiary: "#009688",

        detrimental: "#d94040",
        positive: "#7fa800",

        contrast: "#fff",

        white: "#fff",
        black: "000",

        grey01: "#1a1a1a",
        grey02: "#282828",
        grey03: "#333",
        grey04: "#484848",
        grey05: "#666",
        grey06: "#848484",
        grey07: "#909090",
        grey08: "#999",
        grey09: "#ccc",
        grey10: "#eee",
        grey11: "#f2f2f2",
        grey12: "#aaa",

        red01: "#cc0000",
        red02: "#f4c7c7",

        yellow01: "#EDD000",
        yellow02: "#FAF1B2",

        green01: "#7FA800",
        green02: "#D8E5B2"
    },

    typography: {
        content: "Open Sans, sans-serif",
        display: "Open Sans Black, sans-serif",
    },

    /* Curvature
          0: 'Off',
          1: 'Weak',
          2: 'Strong',
      */
    curvature: CURVE.WEAK
});
