import React from 'react';
import style from './Footer.module.scss'; // SCSS 모듈 불러오기

const Footer = () => {
  return (
    <footer className={style.footer}>
      COPYRIGHT(C) 2024 NAMUICT. ALL RIGHTS RESERVED.
    </footer>
  );
};

export default Footer;