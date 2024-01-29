import { rem } from "polished";

const colors = {
  primary: {
    main: "hsl(0,0%,100%)",
    sub: "hsl(0,0%,98%)",
  },
  secondary: {
    main: "hsl(200, 15%, 7.84313%)",
    placeholderIcon: "hsl(0, 0%, 70%)",
    placeholderText: "hsl(0, 0%, 77%)",
  },
  accent: {
    main: "hsl(200, 100%, 46%)",
  },
  shadow: {
    main: `0 ${rem("2px")} ${rem("4px")} 0 hsl(0,0%,0%,5.62%)`,
    card: `0 0 ${rem("7px")} ${rem("2px")} hsl(0,0%,0%,2.94%)`,
    input: `0 0 ${rem("9px")} ${rem("2px")} hsl(0,0%,0%,2.94%)`,
    borderCountryButton: `0 0 ${rem("4px")} ${rem("1px")} hsl(0,0%,0%,10.49%)`,
    backButton: `0 0 ${rem("7px")} 0 hsl(0,0%,0%,10.49%)`,
  },
  option: {
    bg: "hsl(0, 0%, 95%)",
  },
};

export default colors;
