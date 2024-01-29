import { useEffect, useState, useContext } from "react";
import LayoutWrapper from "../../styles/common/layout-wrapper";
import Countries from "../../components/countries/countries.component";
import { SearchAndFilterContainer } from "./home.styles";
import SearchBar from "../../components/search-bar/search-bar.component";
import RegionFilterBar from "../../components/region-filter-bar/region-filter-bar.component";
import { CountriesContext } from "../../contexts/countries.context";
import BackToTopButton from "../../components/back-to-top-button/back-to-top-button.component";

const Home = () => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [regionFilterValue, setRegionFilterValue] = useState("");
  const { countries } = useContext(CountriesContext);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    const newFilteredCountries = countries.filter(
      ({ name: { common: name }, region }) => {
        const nameHasSearchValue = name.toLowerCase().includes(searchValue);
        const countryIsInFilteredRegion = regionFilterValue
          ? region.toLowerCase() === regionFilterValue
          : true;

        return nameHasSearchValue && countryIsInFilteredRegion;
      }
    );
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
      <BackToTopButton />
    </LayoutWrapper>
  );
};

export default Home;
