import styled from "styled-components";
import { rem } from "polished";
import colors from "../../styles/colors";
import Select from "react-select";

const { primary, secondary, accent, shadow, option } = colors;

export const SelectRegion = styled(Select)`
  .select__control {
    height: clamp(3rem, 1.882vw + 2.559rem, 3.5rem);
    width: ${rem("200px")};
    position: relative;
    border: none;
    border-radius: ${rem("5px")};
    background-color: ${primary.main};
    box-shadow: ${shadow.input};
    padding-right: ${rem("14px")};
    padding-left: ${rem("24px")};
    font-size: clamp(0.75rem, 0.471vw + 0.64rem, 0.875rem);
    cursor: pointer;
    transition: none;
  }

  .select__menu {
    border: none;
    border-radius: ${rem("5px")};
    box-shadow: ${shadow.input};
    padding-block: ${rem("8px")};
  }

  .select__option {
    padding: ${rem("8px")} ${rem("24px")};
    cursor: pointer;
  }

  .select__option--is-focused {
    background-color: ${option.bg};
  }

  .select__option--is-selected {
    background-color: ${accent.main};
  }

  .select__value-container {
    padding-left: 0;
  }

  .select__indicator-separator {
    display: none;
  }

  .select__placeholder {
    color: ${secondary.main};
  }
`;
