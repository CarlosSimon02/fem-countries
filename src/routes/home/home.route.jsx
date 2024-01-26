import { useEffect, useState } from "react";
import LayoutWrapper from "../../styles/common/layout-wrapper";
import Countries from "../../components/countries/countries.component";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json();
      })
      .then((countries) => {
        setCountries(countries);
        setFilteredCountries(countries);
      });
  }, []);

  const onSearchChangeHandler = (event) => {
    const value = event.target.value.toLowerCase();
    const searchedCountries = countries.filter(({name})=> {
      return name.common.toLowerCase().includes(value);
    });
    setFilteredCountries(searchedCountries);
  } 

  return (
    <LayoutWrapper>
      <input type="search" onChange={onSearchChangeHandler}/>
      <Countries countries={filteredCountries}/>
    </LayoutWrapper>
  );
};

export default Home;
