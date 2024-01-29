import React, { useState, useEffect, useContext } from "react";
import { CountriesContext } from "../../contexts/countries.context";
import { useParams } from "react-router-dom";
import { Wrapper, FlexContainer, DetailsContainer } from "./country.styles";

const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [bordersData, setBordersData] = useState([]);
  const { countries } = useContext(CountriesContext);

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

  useEffect(() => {
    if (country) {
      const { borders } = country;
      setBordersData(
        countries
          .filter(({ cca3 }) => {
            return borders.includes(cca3);
          })
          .map(({ name: { common: name }, cca3 }) => {
            return { name, cca3 };
          })
      );
    }
  }, [country, countries]);

  useEffect(() => {
    console.log(bordersData);
  }, [bordersData]);

  if (!country) {
    return <div>Loading</div>;
  }

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
              <p>
                <span className="label">Area: </span>
                {area.toLocaleString()}km<sup>2</sup>
              </p>
              <p>
                <span className="label">Population: </span>
                {population.toLocaleString()}
              </p>
              <p>
                <span className="label">Region: </span>
                {region}
              </p>
              <p>
                <span className="label">Sub Region: </span>
                {subregion}
              </p>
              <p>
                <span className="label">Capital: </span>
                {capital.join(", ")}
              </p>
            </div>
            <div>
              <p>
                <span className="label">Top Level Domain: </span>
                {topLevelDomain}
              </p>
              <p>
                <span className="label">Currencies: </span>
                {Object.keys(currencies).map((key) => currencies[key].name)}
              </p>
              <p>
                <span className="label">Languages: </span>
                {Object.keys(languages)
                  .map((key) => languages[key])
                  .join(", ")}
              </p>
            </div>
          </div>
          <p className="borders">
            <span className="label">Border Countries: </span>
            {bordersData.length > 0 ? (
              bordersData.map(({ cca3, name }) => {
                return <button key={cca3}>{name}</button>;
              })
            ) : "No Borders"}
          </p>
        </DetailsContainer>
      </FlexContainer>
    </Wrapper>
  );
};

export default Country;
