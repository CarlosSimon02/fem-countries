import styled from "styled-components";
import { rem } from "polished";
import colors from "../../styles/colors"

const {primary,shadow} = colors;

export const CountryCardContainer = styled.div`
  width: ${rem("264px")};
  height: ${rem("336px")};
  background-color: ${primary.main};
  border-radius: ${rem("5px")};
  overflow: hidden;
  box-shadow: ${shadow.card};

  img {
    height: 160px;
    width: 100%;
  }
`

export const DetailsContainer = styled.div`
  padding: ${rem("24px")};

  h1 {
    font-size: ${rem("18px")};
    margin-bottom: ${rem("16px")};
    font-weight: 800;
  }

`