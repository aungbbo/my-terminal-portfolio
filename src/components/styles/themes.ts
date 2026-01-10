import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#18232C",
      scrollHandle: "#141E26",
      scrollHandleHover: "#1C2A35",
      primary: "#0ED6A8",
      secondary: "#F4A261",
      text: {
        100: "#E2E8F0",
        200: "#C7D2E0",
        300: "#8A99AD",
      },
    },
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#F4F7F8",
      scrollHandle: "#C9D1D9",
      scrollHandleHover: "#B4BDC6",
      primary: "#028C8C",
      secondary: "#F59E0B",
      text: {
        100: "#1F2937",
        200: "#374151",
        300: "#6B7280",
      },
    },
  },
  ubuntu: {
    id: "T_006",
    name: "ubuntu",
    colors: {
      body: "#2D0922",
      scrollHandle: "#F47845",
      scrollHandleHover: "#E65F31",
      primary: "#80D932",
      secondary: "#80D932",
      text: {
        100: "#FFFFFF",
        200: "#E1E9CC",
        300: "#CDCDCD",
      },
    },
  },
  nord: {
    id: "T_008",
    name: "nord",
    colors: {
      body: "#2E3440",
      scrollHandle: "#3B4252",
      scrollHandleHover: "#4C566A",

      primary: "#88C0D0",
      secondary: "#8FBCBB",

      text: {
        100: "#ECEFF4",
        200: "#D8DEE9",
        300: "#BF616A",
      },
    },
  },
  amber: {
    id: "T_013",
    name: "amber",
    colors: {
      body: "#120A05",
      scrollHandle: "#3A1F0E",
      scrollHandleHover: "#5A2F14",
      primary: "#FFB000",
      secondary: "#E38B29",
      text: {
        100: "#FFE8B3",
        200: "#FFD27D",
        300: "#FF4D4D",
      },
    },
  },
  ultraviolet: {
    id: "T_011",
    name: "ultraviolet",
    colors: {
      body: "#0D0618",
      scrollHandle: "#24123D",
      scrollHandleHover: "#3A1B63",
      primary: "#B14EFF",
      secondary: "#8F6BFF",
      text: {
        100: "#E6DBFF",
        200: "#BFA8FF",
        300: "#FF4D4D",
      },
    },
  },

  deepblue: {
    id: "T_014",
    name: "deepblue",
    colors: {
      body: "#0a0329",
      scrollHandle: "#0B1B3A",
      scrollHandleHover: "#132E5C",
      primary: "#009dff",
      secondary: "#22D3EE",
      text: {
        100: "#E6F0FF",
        200: "#BFD9FF",
        300: "#FF4D4D",
      },
    },
  },
  matrix: {
    id: "T_005",
    name: "matrix",
    colors: {
      body: "#000000",
      scrollHandle: "#0E0E0E",
      scrollHandleHover: "#1C1C1C",
      primary: "#00FF00",
      secondary: "#33CC33",
      text: {
        100: "#66FF66",
        200: "#99FF99",
        300: "#FF3333",
      },
    },
  },
};

export default theme;
