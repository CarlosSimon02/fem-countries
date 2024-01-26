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
        <h1>{name}</h1>
        <p>{population}</p>
        <p>{region}</p>
        <p>{capital ? capital[0] : "No Capital"}</p>
      </DetailsContainer>
    </CountryCardContainer>
  );
};

export default CountryCard;
