import styled from "styled-components";
import colors from "../../styles/colors";
import { rem } from "polished";
import { ReactComponent as UpSVG } from "../../assets/up.svg";

const { shadow, accent, secondary } = colors;

export const BackToTopButtonStyle = styled.button`
  padding-inline: ${rem("32px")};
  padding-block: ${rem("12px")};
  background-color: ${accent.main};
  border-style: none;
  color: white;
  box-shadow: ${shadow.backButton};
  display: flex;
  gap: ${rem("8px")};
  cursor: pointer;
  position: fixed;
  bottom: ${rem("50px")};
  right: ${rem("50px")};
`;

export const UpIcon = styled(UpSVG)`
  width: ${rem("18px")};
  height: ${rem("18px")};

  path {
    fill: white;
  }
`;
