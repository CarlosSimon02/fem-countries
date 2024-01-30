import styled from "styled-components";
import colors from "../../styles/colors";
import { rem } from "polished";
import {ReactComponent as SearchSVG} from "../../assets/search.svg"

const {primary,secondary,shadow} = colors;

export const SearchBarContainer = styled.div`
  height: clamp(3rem, 1.882vw + 2.559rem, 3.5rem);
  width: 100%;
  max-width: ${rem("480px")};
  position: relative;
`

export const SearchIcon = styled(SearchSVG)`
  width: clamp(1rem, 0.471vw + 0.89rem, 1.125rem);
  height: clamp(1rem, 0.471vw + 0.89rem, 1.125rem);
  top: 50%;
  left: ${rem("32px")};
  transform: translateY(-50%);
  display: inline;
  position: absolute;
  pointer-events: none;

  path {
    fill: ${secondary.placeholderIcon};
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: ${rem("5px")};
  background-color: ${primary.main};
  box-shadow: ${shadow.input};
  padding: ${rem("14px")};
  padding-left: ${rem("74px")};
  font-size: clamp(0.75rem, 0.471vw + 0.64rem, 0.875rem);
  color: inherit;

  &::placeholder {
    color: ${secondary.placeholderText};
  }
` 