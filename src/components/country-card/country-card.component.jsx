import { CountryCardContainer, DetailsContainer } from "./country-card.styles";

const CountryCard = ({ country }) => {
  console.log(country);
  const {
    flags: { png: image, alt: imageAlt },
    name: { common: name },
    population,
    region,
    capital,
  } = country;

  return (
    <CountryCardContainer>
      <img src={image} alt={imageAlt} />
      <DetailsContainer>
        <h1 className="country">{name}</h1>
        <div className="infos">
          <p className="info">
            <span className="label">Population</span>:{" "}
            {population.toLocaleString()}
          </p>
          <p className="info">
            <span className="label">Region:</span> {region}
          </p>
          <p className="info">
            <span className="label">
              {capital && capital.length > 1 ? "Capitals: " : "Capital: "}
            </span>
            {capital ? capital.join(",  ") : "No Capital"}
          </p>
        </div>
      </DetailsContainer>
    </CountryCardContainer>
  );
};

export default CountryCard;
