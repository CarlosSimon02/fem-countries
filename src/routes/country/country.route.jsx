import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id.toUpperCase()}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountry(data);
      });
  }, [id]);

  if (!country) {
    return <div>Loading</div>;
  }

  console.log(country);

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
  } = country;

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
