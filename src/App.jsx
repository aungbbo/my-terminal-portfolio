import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";

function App() {
  const { theme, themeLoaded } = useTheme();

  // Prevent page scroll on arrow keys
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (["ArrowUp", "ArrowDown"].includes(e.code)) e.preventDefault();
    });
  }, []);

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Terminal />
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
