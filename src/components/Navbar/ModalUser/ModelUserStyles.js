import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color:  var(--galletita-bg);
  box-shadow: 0 0 50px 20px rgb(239 141 12 / 24%);
  width: 450px;
  top: 100px;
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 90%;
    }
  }
`;

export const LinkStyled = styled(Link)`
  &:hover {
    opacity: 90%;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;
