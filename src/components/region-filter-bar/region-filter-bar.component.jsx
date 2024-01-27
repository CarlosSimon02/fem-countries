import { SelectRegion } from "./region-filter-bar.styles";

const regions = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "antarctic", label: "Antarctic" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const RegionFilterBar = ({ onChange }) => {
  return (
    <SelectRegion
      options={regions}
      isClearable={true}
      isSearchable={false}
      name="regions"
      classNamePrefix="select"
      placeholder="Filter by Region"
      onChange={onChange}
    />
  );
};

export default RegionFilterBar;
