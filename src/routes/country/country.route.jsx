import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, FlexContainer, DetailsContainer } from "./country.styles";

const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/alpha/${id.toUpperCase()}?fields=flags,name,area,population,region,subregion,capital,tld,currencies,languages,borders`
    )
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
    flags: { svg: image, alt: imageAlt },
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
    <Wrapper>
      <button>Back</button>
      <FlexContainer>
        <img src={image} alt={imageAlt} />
        <DetailsContainer>
          <h1 className="title">{name}</h1>
          <div className="columns">
            <div>
              <p>{area}</p>
              <p>{population}</p>
              <p>{region}</p>
              <p>{subregion}</p>
              <p>{capital.join(", ")}</p>
            </div>
            <div>
              <p>{topLevelDomain}</p>
              <p>
                {Object.keys(currencies).map((key) => currencies[key].name)}
              </p>
              <p>{Object.keys(languages).map((key) => languages[key])}</p>
            </div>
          </div>
          <p>{borders && borders.join(", ")}</p>
        </DetailsContainer>
      </FlexContainer>
    </Wrapper>
  );
};

export default Country;
