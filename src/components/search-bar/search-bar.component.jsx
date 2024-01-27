import {SearchBarContainer,SearchInput,SearchIcon} from "./search-bar.styles";

const SearchBar = ({onChange}) => {
  return <SearchBarContainer>
    <SearchIcon/>
    <SearchInput onChange={onChange} placeholder="Search for a country..."/>
  </SearchBarContainer>;
};

export default SearchBar;
