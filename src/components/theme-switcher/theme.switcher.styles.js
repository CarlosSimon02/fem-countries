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
  font-size: clamp(0.75rem, 0.941vw + 0.529rem, 1rem);
  gap: ${rem("8px")};

  p {
    font-weight: 600;
  }
`;

export const Moon = styled(MoonSVG)`
  width: clamp(1rem, 0.941vw + 0.779rem, 1.25rem);
  height: clamp(1rem, 0.941vw + 0.779rem, 1.25rem);

  path {
    fill: ${secondary.main};
  }
`;
