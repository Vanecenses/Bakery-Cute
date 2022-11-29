import React, { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';



import * as cartActions from '../../Redux/cart/cart-actions'
import * as userActions from '../../Redux/user/user-actions'

import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import ModalCart from './ModalCart/ModalCart';
import ModalUser from './ModalUser/ModalUser';
import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  ModalOverlayStyled,
  NavbarContainerStyled,
  SpanStyled,
  UserNavStyled,
} from './NavbarStyles';

function Navbar() {
  const [openUser, setOpenUser] = useState();

  const hiddenCart = useSelector(state => state.cart.hidden)
  const { hiddenMenu, currentUser } = useSelector(state => state.user);

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const totalCartItenms = useSelector(state => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)

  useEffect(() => {
    if(!hiddenCart) {
      dispatch(cartActions.toggleHiddenCart())
    }
  },[dispatch])

  return (
    <NavbarContainerStyled>
      {
        !hiddenCart && (
          <ModalOverlayStyled
            onClick={() => !hiddenCart && dispatch(cartActions.toggleHiddenCart())}
            isHidden={hiddenCart}
          />
        )
      }
      <AnimatePresence>{!hiddenCart && <ModalCart/>}</AnimatePresence>
      <AnimatePresence>{!hiddenMenu && <ModalUser />}</AnimatePresence>
      <div>
        <Link to='/'>
          <img
            src= 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Fpanaderia_1669110&psig=AOvVaw0uKmzHMbb9oXLPu2jLZyHH&ust=1668809127162000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIC0u_ebtvsCFQAAAAAdAAAAABAE'
            alt=''
          />
        </Link>
      </div>
      <LinksContainerStyled>
<motion.div whileTap={{ scale: 0.97 }}>
        <Link to='/'>
          <LinkContainerStyled home>
            <HiHome />
          </LinkContainerStyled>
          Home
        </Link>
</motion.div>

        <CartNavStyled>
          <LinkContainerStyled
          onClick={() => {dispatch(cartActions.toggleHiddenCart());
            !hiddenMenu && dispatch(userActions.toggleMenuHidden())}
          }
          >
            <FaShoppingCart />
            <span>{totalCartItenms}</span>
          </LinkContainerStyled>
        </CartNavStyled>

        <UserNavStyled>
          <LinkContainerStyled
            onClick={() =>
              currentUser
              ? dispatch(userActions.toggleMenuHidden())
              : navigate('/register')
                
            }
          >
            <SpanStyled> {
                currentUser ? `${currentUser.displayName}` : 'Inicia sesión'
              } </SpanStyled>
            <FaUserAlt />
          </LinkContainerStyled>
        </UserNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
