import styled from "styled-components";
import { rem } from "polished";
import colors from "../../../styles/colors";

const { primary, shadow } = colors;

export const BorderCountryButtonStyle = styled.button`
  border-radius: ${rem("2px")};
  color: inherit;
  border-style: none;
  background-color: ${primary.main};
  box-shadow: ${shadow.borderCountryButton};
  cursor: pointer;
`;
