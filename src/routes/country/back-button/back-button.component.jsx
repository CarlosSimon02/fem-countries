import { BackIcon, BackButtonStyle } from "./back-button.styles";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const onBackHandle = () => {
    navigate(-1);
  };

  return (
    <BackButtonStyle onClick={onBackHandle}>
      <BackIcon />
      Back
    </BackButtonStyle>
  );
};

export default BackButton;
