import {SelectRegion} from "./region-filter-bar.styles";

const RegionFilterBar = () => {
  return (
    <SelectRegion>
      <option value="option1">Africa</option>
      <option value="option2">America</option>
      <option value="option3">Asia</option>
      <option value="option3">Europe</option>
      <option value="option3">Oceana</option>
    </SelectRegion>
  );
};

export default RegionFilterBar;
