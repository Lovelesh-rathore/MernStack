import React, { useEffect, useState ,useContext} from "react";

const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("ChatBuzz") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ChatBuzz", theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};