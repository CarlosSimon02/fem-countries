import { Button, Moon, Sun } from "./theme.switcher.styles";
import { useContext } from "react";
import { AppTheme, AppThemeContext } from "../../contexts/app-theme.context";
import { Fragment } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(AppThemeContext);

  const switchTheme = () => {
    if (theme === AppTheme.dark) {
      setTheme(AppTheme.light);
    } else {
      setTheme(AppTheme.dark);
    }
  };

  return (
    <Button onClick={switchTheme}>
      {theme === AppTheme.light ? (
        <Fragment>
          <Moon />
          <p>Dark Mode</p>
        </Fragment>
      ) : (
        <Fragment>
          <Sun />
          <p>Light Mode</p>
        </Fragment>
      )}
    </Button>
  );
};

export default ThemeSwitcher;
