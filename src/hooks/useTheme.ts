import { useEffect, useState } from "react";
import themes from "../components/styles/themes";
import { setToLS, getFromLS } from "../utils/storage";
import { DefaultTheme } from "styled-components";

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: DefaultTheme) => {
    setToLS("tsn-theme", mode.name);
    setTheme(mode);
  };

  useEffect(() => {
    const localThemeName = getFromLS("tsn-theme");
    // A saved name can outlive its theme (renamed or removed), so fall back to
    // the default rather than handing an undefined theme to the ThemeProvider.
    const savedTheme = localThemeName ? themes[localThemeName] : undefined;
    setTheme(savedTheme ?? themes.dark);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
