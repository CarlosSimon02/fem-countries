import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext } from "../../contexts/countries.context";

const Country = () => {
  const { countries } = useContext(CountriesContext);
  const { country } = useParams();
  const [currentCountry, setCurrentCountry] = useState(null);

  useEffect(() => {
    const foundCountry = countries.find(({ name }) => {
      const formattedName = name.common.toLowerCase().replace(/ /g, "-");
      return formattedName === country;
    });

    setCurrentCountry(foundCountry || null);
  }, [countries, country]);

  if (!currentCountry) {
    return <div>Loading</div>;
  }

  console.log(currentCountry);

  const {
    flags: { png: image, alt: imageAlt },
    name: { common: name },
    area,
    population,
    region,
    subregion,
    capital,
    tld: topLevelDomain,
    currencies,
    languages,
    borders,
  } = currentCountry;

  return <div>
    <img src={image} alt={imageAlt} />
    <div>
      <p>{name}</p>
      <p>{area}</p>
      <p>{population}</p>
      <p>{region}</p>
      <p>{subregion}</p>
    </div>
  </div>;
};

export default Country;
