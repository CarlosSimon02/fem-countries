import { HeaderContainer, Wrapper, Title } from "./header.styles";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import ThemeSwitcher from "../../components/theme-switcher/theme-switcher.component";

const Header = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <Wrapper>
          <Link to="/">
            <Title>Where in the world?</Title>
          </Link>
          <ThemeSwitcher />
        </Wrapper>
      </HeaderContainer>
      <Outlet />
    </Fragment>
  );
};

export default Header;
