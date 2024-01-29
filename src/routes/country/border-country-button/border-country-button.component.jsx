import { BorderCountryButtonStyle } from "./border-country-button.styles";
import { useNavigate } from "react-router-dom";

const BorderCountryButton = ({ borderCountry }) => {
  const { name, cca3 } = borderCountry;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(`/${cca3.toLowerCase()}`);
  };

  return (
    <BorderCountryButtonStyle onClick={onNavigateHandler}>
      {name}
    </BorderCountryButtonStyle>
  );
};

export default BorderCountryButton;
