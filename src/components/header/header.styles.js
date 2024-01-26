import styled from "styled-components";
import { rem } from "polished";

import colors from "../../styles/colors";

const {primary} = colors;

export const HeaderContainer = styled.header`
  background-color: ${primary.main};
  height: ${rem("80px")};
  width: 100%;
`;
