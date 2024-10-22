import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './Gate.module.scss';



const Gate = () => {

  const navigate = useNavigate();

  const handleLogoCLick = () => {
    navigate('/home');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleJoinClick = () => {
    navigate('/join');
  };

  const handleGuestClick = () => {
    navigate('/home');
  };

  return (
    <div className={style.container}>

      <button className={style.logo_button} onClick={handleLogoCLick}>
        TOY DRUG
      </button>

      <div className={style.button_box}>
        <button className={style.small_button} onClick={handleLoginClick}>
          login
        </button>
        <button className={style.small_button} onClick={handleJoinClick}>
          join
        </button>
        <button className={style.small_button} onClick={handleGuestClick}>
          guest
        </button>
      </div>

    </div>
  );
};

export default Gate;
