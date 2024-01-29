import styled from "styled-components";
import colors from "../../../styles/colors";
import { rem } from "polished";
import { ReactComponent as BackSVG } from "../../../assets/back.svg";

const { primary, shadow, secondary } = colors;

export const BackButtonStyle = styled.button`
  padding-inline: ${rem("24px")};
  padding-block: ${rem("6px")};
  background-color: ${primary.main};
  border-style: none;
  color: inherit;
  box-shadow: ${shadow.backButton};
  display: flex;
  gap: ${rem("8px")};
  cursor: pointer;
`;

export const BackIcon = styled(BackSVG)`
  width: ${rem("18px")};
  height: ${rem("18px")};

  path {
    fill: ${secondary.main};
  }
`;
