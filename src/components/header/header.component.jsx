import { HeaderContainer, Wrapper } from "./header.styles";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <Wrapper>
          <h2>Where in the world?</h2>
          <button>Dark Mode</button>
        </Wrapper>
      </HeaderContainer>
      <Outlet />
    </Fragment>
  );
};

export default Header;
