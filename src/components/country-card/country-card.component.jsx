import {} from "./country-card.styles";

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
    <div>
      <img src={image} alt={imageAlt} />
      <p>{name}</p>
      <p>{population}</p>
      <p>{region}</p>
      <p>{capital ? capital[0] : "No Capital"}</p>
    </div>
  );
};

export default CountryCard;
