import styled from "styled-components";
import { rem } from "polished";
import LayoutWrapper from "../../styles/common/layout-wrapper";

export const Wrapper = styled(LayoutWrapper)`
  padding-block: ${rem("80px")};
`;

export const FlexContainer = styled.div`
  margin-top: ${rem("80px")};
  display: flex;
  flex-wrap: wrap;
  gap: clamp(2.75rem, 9.39vw + 0.549rem, 9rem);
  align-items: center;

  img {
    height: clamp(14.313rem, 16.15vw + 10.527rem, 25.063rem);
  }
`;

export const DetailsContainer = styled.div`
  .title {
    font-weight: 800;
    font-size: clamp(1.375rem, 2.353vw + 0.824rem, 2rem);
    margin-bottom: clamp(1rem, 1.647vw + 0.614rem, 1.438rem);
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    gap: ${rem("117px")};
  }
`;