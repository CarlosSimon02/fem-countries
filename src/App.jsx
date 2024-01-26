import { useEffect, useState } from "react";

import Header from "./components/header/header.component";

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
      <Header/>
      <input type="search" />
      <div>
        {countries.map((country,index) => {
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
