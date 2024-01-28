import { useEffect, useState } from "react";
import LayoutWrapper from "../../styles/common/layout-wrapper";
import Countries from "../../components/countries/countries.component";
import { SearchAndFilterContainer } from "./home.styles";
import SearchBar from "../../components/search-bar/search-bar.component";
import RegionFilterBar from "../../components/region-filter-bar/region-filter-bar.component";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [regionFilterValue, setRegionFilterValue] = useState("");

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

  useEffect(() => {
    const newFilteredCountries = countries.filter(({ name, region }) => {
      const nameHasSearchValue = name.common
        .toLowerCase()
        .includes(searchValue);
      const countryIsInFilteredRegion = regionFilterValue
        ? region.toLowerCase() === regionFilterValue
        : true;

      return nameHasSearchValue && countryIsInFilteredRegion;
    });
    setFilteredCountries(newFilteredCountries);
  }, [countries, searchValue, regionFilterValue]);

  const onSearchChangeHandler = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
  };

  const onRegionFilterChangeHandler = (selected) => {
    const value = selected ? selected.value : "";
    setRegionFilterValue(value);
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
