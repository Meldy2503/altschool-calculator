import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import Calculator from "./components/Calculator";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  const darkTheme = {
    body: "#181717",
    shadow: "#000",
    shadowBefore: " #333232",
    containerBgCo: "#202020",
    currentText: "#f3f3f3",
    previousText: "#ffffffcc",
    screenBefore: "#ffffff1f",
    btnBgCo: "#0f0f0f",
    btnActiveColor: "#141414",
    btnTextColor: "#f3f3f3",
    btnHoverBg: "#221f1f",
    btnHoverCo: "#f3f3f3",
    btnBoxShadowbefore: "#424242",
  };
  const lightTheme = {
    body: "#f5f5f5",
    shadow: "#b4b2b2",
    shadowBefore: " #fff",
    containerBgCo: "#f1efef",
    currentText: "#141414",
    previousText: "#2b2b2b",
    screenBefore: "#ffffff1f",
    btnBgCo: "#f7f4f4",
    btnActiveColor: "#aaa9a9",
    btnTextColor: "#333",
    btnHoverBg: "#fae0e0",
    btnHoverCo: "#141414",
    btnBoxShadowbefore: "#e2dfdf",
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Calculator />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
