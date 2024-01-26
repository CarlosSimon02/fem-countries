import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.component";

import { GlobalStyles } from "./global.styles";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((countries) => {
        console.log(countries);
        setCountries(countries);
      });
  }, []);

  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />}
        </Route>
      </Routes>
      <Header />
      <input type="search" />
      <div>
        {countries.map((country, index) => {
          return (
            <div key={country.cca3}>
              <h1>{country.name.common}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
