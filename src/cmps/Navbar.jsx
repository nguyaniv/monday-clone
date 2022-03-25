import React, { useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Navbar = ({ toggle, setToggle }) => {
  const [isProduct, setIsProduct] = useState(false);
  const [isSolutions, setIsSolutions] = useState(false);

  const onSetIsProduct = () => {
    return isProduct
      ? setIsProduct(false) & setToggle(false)
      : setIsProduct(true) & setIsSolutions(false) & setToggle(true);
  };
  const onSetIsSolutions = () => {
    return isSolutions
      ? setIsSolutions(false) & setToggle(false)
      : setIsSolutions(true) & setIsProduct(false) & setToggle(true);
  };

  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar__left">
          <div className="navbar__logo">
            <span className="icon-colors"></span> monday<span>.com</span>
          </div>
          <li
            onClick={onSetIsProduct}
            style={isProduct ? { color: '#5034ff' } : {}}
          >
            Product{' '}
            <ArrowDownwardIcon
              className={isProduct ? `arrow-rotate` : `arrow`}
              fontSize="small"
            />
          </li>
          <li
            onClick={onSetIsSolutions}
            style={isSolutions ? { color: '#5034ff' } : {}}
          >
            Solutions{' '}
            <span className="arrow">
              <ArrowDownwardIcon
                className={isSolutions ? `arrow-rotate` : `arrow`}
                fontSize="small"
              />
            </span>{' '}
          </li>
          <li>Templates</li>
          <li>Pricing</li>
        </nav>
        <nav className="navbar__right">
          <li>Contact sales</li>
          <li>Log in</li>
          <button className="navbar__btn">
            Get Started <ArrowForwardIcon className="right-arrow" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
