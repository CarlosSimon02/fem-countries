import { useEffect, useState } from "react";
import LayoutWrapper from "../../styles/common/layout-wrapper";
import Countries from "../../components/countries/countries.component";
import { SearchAndFilterContainer } from "./home.styles";
import SearchBar from "../../components/search-bar/search-bar.component";
import RegionFilterBar from "../../components/region-filter-bar/region-filter-bar.component";

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
    const searchedCountries = countries.filter(({ name }) => {
      return name.common.toLowerCase().includes(value);
    });
    setFilteredCountries(searchedCountries);
  };

  const onRegionFilterChangeHandler = (selected) => {
    if (selected) {
      const searchedCountries = countries.filter(({ region }) => {
        return region.toLowerCase() === selected.value;
      });
      setFilteredCountries(searchedCountries);
    } else setFilteredCountries(countries);
  };

  return (
    <LayoutWrapper>
      <SearchAndFilterContainer>
        <SearchBar onChange={onSearchChangeHandler} />
        <RegionFilterBar onChange={onRegionFilterChangeHandler} />
      </SearchAndFilterContainer>
      <Countries countries={filteredCountries} />
    </LayoutWrapper>
  );
};

export default Home;
