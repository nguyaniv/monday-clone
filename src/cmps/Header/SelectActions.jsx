import React from 'react';
import icon1 from '../../style/icons/header-icon-1.png';
import icon2 from '../../style/icons/header-icon-2.png';
import icon3 from '../../style/icons/header-icon-3.png';
import icon4 from '../../style/icons/header-icon-4.png';
import icon5 from '../../style/icons/header-icon-5.png';
import icon6 from '../../style/icons/header-icon-6.png';
import icon7 from '../../style/icons/header-icon-7.png';
import icon8 from '../../style/icons/header-icon-8.png';
import icon9 from '../../style/icons/header-icon-9.png';
import Action from './Action';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SelectActions = () => {
  const actions = [
    { src: icon1, color: 66, text: 'Creattiv & design', border: '#ff8ac4' },
    { src: icon2, color: 48, text: 'IT', border: '#d0aeed' },
    { src: icon3, color: 185, text: 'Software development', border: '#ff9900' },
    { src: icon4, color: 90, text: 'Marketing', border: '#ee3f94' },
    { src: icon5, color: 347, text: 'Project managment', border: '#009aff' },
    { src: icon6, color: 315, text: 'Sales & CRM', border: '#00cfd0' },
    { src: icon7, color: 344, text: 'Task management', border: '#aaccfc' },
    { src: icon8, color: 118, text: 'HR', border: '#ff7575' },
    { src: icon9, color: 334, text: 'Operations', border: '#559dc2' },
  ];

  return (
    <div className="header__actions">
      <div className="header__actions--selects">
        {actions.map((action) => (
          <Action key={action.text} action={action} />
        ))}
      </div>

      <div className="header__actions--btn">
        <button className="navbar__btn">
          Get Started <ArrowForwardIcon className="right-arrow" />
        </button>
        <p>Full access. No credit card needed.</p>
      </div>
    </div>
  );
};

export default SelectActions;
