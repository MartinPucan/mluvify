import React from 'react';
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";

const Menu = () => {
  return (
    <div className="footer-menu">
      <div className="footer-menu-item">
        <FiArrowLeft/>
      </div>
      <div className="footer-menu-item">
        <FiArrowRight/>
      </div>
    </div>
  );
};

export default Menu;
