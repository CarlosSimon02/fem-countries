import { CountriesContainer } from "./countries.styles";

import CountryCard from "../country-card/country-card.component";

const Countries = ({ countries }) => {
  return (
    <CountriesContainer>
      {countries.map((country) => {
        return (
          <CountryCard key={country.cca3} country={country} />
        );
      })}
    </CountriesContainer>
  );
};

export default Countries;