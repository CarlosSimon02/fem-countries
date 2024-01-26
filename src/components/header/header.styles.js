import styled from "styled-components";
import { rem } from "polished";

import colors from "../../styles/colors";
import LayoutWrapper from "../../styles/common/layout-wrapper";

const { primary } = colors;

export const HeaderContainer = styled.header`
  background-color: ${primary.main};
  height: ${rem("80px")};
`;

export const Wrapper = styled(LayoutWrapper)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: clamp(0.875rem, 2.353vw + 0.324rem, 1.5rem);
`;
