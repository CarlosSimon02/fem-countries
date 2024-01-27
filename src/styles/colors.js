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
  shadow: {
    main: `0 ${rem("2px")} ${rem("4px")} 0 hsl(0,0%,0%,5.62%)`,
    card: `0 0 ${rem("7px")} ${rem("2px")} hsl(0,0%,0%,2.94%)`,
    input: `0 0 ${rem("9px")} ${rem("2px")} hsl(0,0%,0%,2.94%)`,
  },
};

export default colors;
