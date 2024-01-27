import styled from "styled-components";
import { rem } from "polished";
import colors from "../../styles/colors";

const { primary, shadow } = colors;

export const SelectRegion = styled.select`
  cursor: pointer;
  width: ${rem("200px")};
  height: clamp(3rem, 1.882vw + 2.559rem, 3.5rem);
  border: none;
  border-radius: ${rem("5px")};
  background-color: ${primary.main};
  box-shadow: ${shadow.input};
  padding: ${rem("14px")};
  padding-left: ${rem("24px")};
  font-size: clamp(0.75rem, 0.471vw + 0.64rem, 0.875rem);
  appearance: none;
  /* safari */
  -webkit-appearance: none;
  /* other styles for aesthetics */
  cursor: pointer;
`;
