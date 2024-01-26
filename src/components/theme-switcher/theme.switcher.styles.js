import styled from "styled-components";
import colors from "../../styles/colors";
import { rem } from "polished";
import { ReactComponent as MoonSVG } from "../../assets/moon.svg";

const { secondary } = colors;

export const Button = styled.button`
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border-style: none;
  display: flex;
  gap: ${rem("8px")};

  p {
    font-weight: 600;
  }
`;

export const Moon = styled(MoonSVG)`
  width: ${rem("20px")};
  height: ${rem("20px")};

  path {
    fill: ${secondary.main};
  }
`;
