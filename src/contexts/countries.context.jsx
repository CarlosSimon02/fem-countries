import { createContext, useState, useEffect } from "react";

export const CountriesContext = createContext({
  countries: [],
});

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=cca3,flags,name,population,region,capital"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const value = { countries };

  return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>;
};
