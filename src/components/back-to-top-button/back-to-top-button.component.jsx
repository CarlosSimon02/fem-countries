import { BackToTopButtonStyle, UpIcon } from "./back-to-top-button.styles";
import { useEffect, useState } from "react";
import React from "react";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return backToTopButton && (
    <BackToTopButtonStyle onClick={scrollUp}>
      <UpIcon />
      Back To Top
    </BackToTopButtonStyle>
  );
};

export default BackToTopButton;
