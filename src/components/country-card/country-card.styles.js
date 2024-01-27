import styled from "styled-components";
import { rem } from "polished";
import colors from "../../styles/colors";

const { primary, shadow } = colors;

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
`;

export const DetailsContainer = styled.div`
  padding: ${rem("24px")};

  .country {
    font-size: ${rem("18px")};
    margin-bottom: ${rem("16px")};
    font-weight: 800;
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: ${rem("8px")};

    .info {
      line-height: ${rem("16px")};
      font-size: ${rem("14px")};
      padding-left: 1.5em;
      text-indent: -1.5em;

      .label {
        font-weight: 600;
      }
    }
  }
`;
