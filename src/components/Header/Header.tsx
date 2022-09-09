import React from 'react';
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import {FiArrowLeft} from "react-icons/fi";

const Header = () => {

  return (
    <header className="header">
      <div className="header-menu">
        <FiArrowLeft />
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;
