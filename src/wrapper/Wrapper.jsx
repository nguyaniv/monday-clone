import React, { useState } from 'react';
import Navbar from '../cmps/Navbar';

function Wrapper(props) {
  return (
    <div>
      <Navbar setToggle={props.setToggle} toggle={props.toggle} />
      <div
        className={props.toggle ? `wrapper-content blur` : `wrapper-content`}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Wrapper;
