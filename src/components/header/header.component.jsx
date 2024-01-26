import { HeaderContainer, Wrapper, Title } from "./header.styles";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <Wrapper>
          <Link to="/">
            <Title>Where in the world?</Title>
          </Link>
          <button>Dark Mode</button>
        </Wrapper>
      </HeaderContainer>
      <Outlet />
    </Fragment>
  );
};

export default Header;
