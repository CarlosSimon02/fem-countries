import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext } from "../../contexts/countries.context";

const Country = () => {
  const { countries } = useContext(CountriesContext);
  const { id } = useParams();
  const [currentCountry, setCurrentCountry] = useState(null);

  useEffect(() => {
    const foundCountry = countries.find(({ cca3 }) => {
      return cca3.toLowerCase() === id;
    });

    setCurrentCountry(foundCountry || null);
  }, [countries, id]);

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

  return (
    <div>
      <img src={image} alt={imageAlt} />
      <div>
        <p>{name}</p>
        <p>{area}</p>
        <p>{population}</p>
        <p>{region}</p>
        <p>{subregion}</p>
        <p>{topLevelDomain}</p>
        <p>{capital.join(", ")}</p>
        <p>{Object.keys(currencies).map((key) => currencies[key].name)}</p>
        <p>{Object.keys(languages).map((key) => languages[key])}</p>
        <p>{borders && borders.join(", ")}</p>
      </div>
    </div>
  );
};

export default Country;
