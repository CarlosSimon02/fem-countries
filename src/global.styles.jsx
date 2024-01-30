import { createGlobalStyle } from "styled-components";
import { resets } from "./styles/resets";
import colors from "./styles/colors";
import { rem } from "polished";

const { primary, secondary } = colors;

export const GlobalStyles = createGlobalStyle`
  ${resets}

  .dark {
    --primary-main: rgb(43, 56, 68);
    --primary-sub: rgb(32, 44, 54);
    --secondary-main: rgb(255, 255, 255);
    --secondary-placeholderIcon: rgb(255, 255, 255);
    --secondary-placeholderText: rgb(255, 255, 255);
    --accent-main: hsl(200, 100%, 46%);
    --shadow-main: 0 ${rem("2px")} ${rem("4px")} 0 hsl(0,0%,0%,5.62%);
    --shadow-card: 0 0 ${rem("7px")} ${rem("2px")} hsl(0,0%,0%,2.94%);
    --shadow-input: 0 0 ${rem("9px")} ${rem("2px")} hsl(0,0%,0%,2.94%);
    --shadow-borderCountryButton: 0 0 ${rem("4px")} ${rem("1px")} hsl(0,0%,0%,10.49%);
    --shadow-backButton: 0 0 ${rem("7px")} 0 hsl(0,0%,0%,10.49%);
    --option-bg: rgb(37, 51, 62); 
  }

  .light {
    --primary-main: hsl(0,0%,100%);
    --primary-sub: hsl(0,0%,98%);
    --secondary-main: hsl(200, 15%, 7.84313%);
    --secondary-placeholderIcon: hsl(0, 0%, 70%);
    --secondary-placeholderText: hsl(0, 0%, 77%);
    --accent-main: hsl(200, 100%, 46%);
    --shadow-main: 0 ${rem("2px")} ${rem("4px")} 0 hsl(0,0%,0%,5.62%);
    --shadow-card: 0 0 ${rem("7px")} ${rem("2px")} hsl(0,0%,0%,2.94%);
    --shadow-input: 0 0 ${rem("9px")} ${rem("2px")} hsl(0,0%,0%,2.94%);
    --shadow-borderCountryButton: 0 0 ${rem("4px")} ${rem("1px")} hsl(0,0%,0%,10.49%);
    --shadow-backButton: 0 0 ${rem("7px")} 0 hsl(0,0%,0%,10.49%);
    --option-bg: hsl(0, 0%, 95%);
  }

  body {
    background-color: ${primary.sub};
    color: ${secondary.main};
    font-family: Nunito Sans, sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
      wdth 100,
      YTLC 500;
  }
`;
