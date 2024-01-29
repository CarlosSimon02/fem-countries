import { CountryCardContainer, DetailsContainer } from "./country-card.styles";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ country }) => {
  const {
    cca3,
    flags: { png: image, alt: imageAlt },
    name: { common: name },
    population,
    region,
    capital,
  } = country;

  const navigate = useNavigate();
  const onNavigateHandler = () => {;
    console.log(cca3);
    navigate(cca3.toLowerCase());
  };

  return (
    <CountryCardContainer onClick={onNavigateHandler}>
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
