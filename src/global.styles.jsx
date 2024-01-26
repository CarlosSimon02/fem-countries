import { createGlobalStyle } from "styled-components";

import { resets } from "./styles/resets";

import colors from "./styles/colors";

const { primary, secondary } = colors;

export const GlobalStyles = createGlobalStyle`
  ${resets}



  body {
    background-color: ${primary.sub};
    color: ${secondary.main};
    font-family: "Nunito Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
      "wdth" 100,
      "YTLC" 500;
  }
`;
