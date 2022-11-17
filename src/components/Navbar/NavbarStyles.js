import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.div`
  height: 100px;
  background-color: #ff5b5bbd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const LinksContainerStyled = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    padding: 1rem 1.5rem;
  }

  a:first-child {
    background: #fffeb3a8;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${props => (props.home ? '#ec042d' : '#ff3842')};
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: red;
    font-size: 1rem;
  }
`;

export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
/* 
   display: flex;
  justify-content: center;
  align-items: center;
    */
  span {
    color:brown;
    font-size: 1rem;
    margin-right: 20px;
  }
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;
