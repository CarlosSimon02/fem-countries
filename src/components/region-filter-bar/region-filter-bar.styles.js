import styled from "styled-components";
import { rem } from "polished";
import colors from "../../styles/colors";
import { ReactComponent as DownArrowSVG } from "../../assets/down-arrow.svg";

const { primary, shadow } = colors;

export const SelectRegionContainer = styled.div`
  height: clamp(3rem, 1.882vw + 2.559rem, 3.5rem);
  width: 100%;
  max-width: ${rem("200px")};
  position: relative;
`;

export const SelectRegion = styled.select`
  cursor: pointer;
  width: 100%;
  height: 100%;
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
`;

export const DownArrowIcon = styled(DownArrowSVG)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${rem("19px")};
  width: ${rem("20px")};
  height: ${rem("20px")};
`