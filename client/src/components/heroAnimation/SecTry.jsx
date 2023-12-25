// DropInAnimation.jsx

import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../heroAnimation/sectry.css'
import LostCat from '../../assets/clips/LostCat.png';

const DropInAnimation = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* <CSSTransition
        in={show}
        timeout={500}
        classNames="drop-in"
        unmountOnExit
      > */}
        <div className="image-wrapper">
          <img
            // className="animate__animated animate__fadeIn animate__scale-500-to-100"
            src={LostCat}
            alt="Your Image"
          />
        </div>
      {/* </CSSTransition> */}
    </div>
  );
};

export default DropInAnimation;
