import { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext({
  countries: {},
});

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((countries) => {
        setCountries(countries);
      });
  }, []);

  const value = { countries };
  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
