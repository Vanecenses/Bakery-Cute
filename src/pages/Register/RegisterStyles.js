import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;

export const LoginButtonGoogleStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  padding: 1rem;
  outline: none;
  border: none;
  border-radius: 2rem;
  background: var(--white-bg);
  color: white;
  cursor: pointer;
`;

export const LoginEmailStyled = styled(Link)`
  & p {
    color: var(--rosado);

    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;
