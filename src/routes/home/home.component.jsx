import { useEffect, useState } from "react";
import { Fragment } from "react";

const Home = () => {
  console.log("called");
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
    <Fragment>
      <input type="search" />
      <div>
        {countries.map((country) => {
          return (
            <div key={country.cca3}>
              <h1>{country.name.common}</h1>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Home;
