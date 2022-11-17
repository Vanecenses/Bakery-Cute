import React from 'react';
import { Link } from 'react-router-dom';

import {
  FooterContainer,
  FooterContainerStyled,
  LinksContainer,
  LinksContainerStyled,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainerStyled>
    <LinksContainerStyled className='links'>
      <Link to='/' style={{ paddingLeft: '3rem', fontFamily:'cursive' ,color:' #ff5b5be8' }}>
        Términos de Uso
      </Link>
      <Link to='/' style={{ paddingLeft: '3rem' , fontFamily:'cursive' ,color:' #ff5b5be8' }}>
        Contacto
      </Link>
      <Link to='/' style={{ paddingLeft: '3rem' ,fontFamily:'cursive' ,color:' #ff5b5be8' }}>
        Nosotros
      </Link>
    </LinksContainerStyled >
    <p style={{ fontFamily:'cursive' ,color:' #ff5b5be8'} }>
      🧁​ Cute Bakery ​🧁​ <span style={{ fontFamily:'cursive' }}> VANECENSES  ​🧁</span>
    </p>
    </FooterContainerStyled>
  );
};

export default Footer;
