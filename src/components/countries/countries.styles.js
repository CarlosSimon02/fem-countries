import styled from "styled-components";

export const CountriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 264px);
  justify-content: space-around;
  gap: clamp(2.5rem, 3.192vw + 1.752rem, 4.625rem);
`;
