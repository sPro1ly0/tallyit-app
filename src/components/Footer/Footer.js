import React from 'react';
import './Footer.css';
import config from '../../config';

function Footer() {

  let copyrightYear = new Date();

  return (
    <footer>
      <p>© {copyrightYear.getFullYear()} Sabrina Becker</p>
      <p className='version-number'>{config.APP_VERSION}</p>
    </footer>
  );
}

export default Footer;