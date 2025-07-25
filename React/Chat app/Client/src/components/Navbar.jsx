import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <>
      <div className=" navbar shadow-sm text-primary flex justify-between items-center p-4">
        <span className="font-bold text-3xl">ChatBuzz</span>

        <ul className="flex space-x-4 text-lg items-center">
          <li className="cursor-pointer btn btn-ghost hover:text-primary-focus transition-colors">
            Home
          </li>
          <li className="cursor-pointer btn btn-ghost hover:text-primary-focus transition-colors"> 
            About
          </li>
          <li className="cursor-pointer btn btn-ghost hover:text-primary-focus transition-colors"> 
            Chat
          </li>
          <li className="cursor-pointer btn btn-ghost hover:text-primary-focus transition-colors"> 
            Login
          </li>
          <li>
            <select
              value={theme}
              onChange={handleThemeChange}
              className="select select-primary bg-base-100 text-base-content"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="cupcake">Cupcake</option>
              <option value="synthwave">Synthwave</option>
              <option value="retro">Retro</option>
              <option value="cyberpunk">Cyberpunk</option>
              <option value="valentine">Valentine</option>
              <option value="halloween">Halloween</option>
              <option value="aqua">Aqua</option>
              <option value="pastel">Pastel</option>
              <option value="forest">Forest</option>
              <option value="lemonade">Lemonade</option>
              <option value="black">Black</option>
              <option value="caramellatte">Caramel Latte</option>
            </select>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
