import styled from "styled-components";
import { rem } from "polished";
import LayoutWrapper from "../../styles/common/layout-wrapper";

export const Wrapper = styled(LayoutWrapper)`
  padding-block: clamp(2.5rem, 9.412vw + 0.294rem, 5rem);
`;

export const FlexContainer = styled.div`
  margin-top: clamp(4rem, 3.765vw + 3.118rem, 5rem);
  display: flex;
  flex-wrap: wrap;
  gap: ${rem("44px")};
  justify-content: space-between;

  img {
    height: clamp(14.313rem, 16.15vw + 10.527rem, 25.063rem);
  }
`;

export const DetailsContainer = styled.div`
  font-size: clamp(0.875rem, 0.471vw + 0.765rem, 1rem);

  .title {
    font-weight: 800;
    font-size: clamp(1.375rem, 2.353vw + 0.824rem, 2rem);
    margin-bottom: clamp(1rem, 1.647vw + 0.614rem, 1.438rem);
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    gap: clamp(2rem, 8.941vw + -0.096rem, 4.375rem);
    justify-content: space-between;

    & > * {
      flex: 1 1 ${rem("200px")};
    }
  }

  p {
    line-height: ${rem("32px")};
    padding-left: 1.5em;
    text-indent: -1.5em;
  }

  .label {
    font-weight: 600;
  }
`;
