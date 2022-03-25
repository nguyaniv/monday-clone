import React from 'react';
import SelectActions from './SelectActions';
import HeaderBootmImg from '../../style/images/header-bottom-img.png';
const Header = () => {
  return (
    <div className="header">
      <div className="header__intro">
        <div className="star"></div>
        <div className="twinkling"></div>
        <div className="sky"></div>
        <h1>A platform built for a new way of working</h1>
        <p>What would you like to manage with monday.com Work OS?</p>
        <SelectActions />
        <img className="header__img" style={{}} src={HeaderBootmImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
