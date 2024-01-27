import {
  SelectRegion,
  SelectRegionContainer,
  DownArrowIcon
} from "./region-filter-bar.styles";

const RegionFilterBar = () => {
  return (
    <SelectRegionContainer>
      <SelectRegion>
        <option value="aftica">Africa</option>
        <option value="ameri">America</option>
        <option value="option3">Asia</option>
        <option value="option3">Europe</option>
        <option value="option3">Oceana</option>
      </SelectRegion>
      <DownArrowIcon/>
    </SelectRegionContainer>
  );
};

export default RegionFilterBar;
