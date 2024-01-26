import styled from "styled-components";
import { rem } from "polished";

const LayoutWrapper = styled.div`
  margin-inline: auto;
  max-width: ${rem("1440px")};
  padding-inline: clamp(1rem, 10.24vw + -1.4rem, 5rem);
`;

export default LayoutWrapper;
