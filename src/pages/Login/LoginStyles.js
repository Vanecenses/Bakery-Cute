import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;

export const LoginPasswordStyled = styled.p`
  margin: 0;
  color: var(--rosado);
  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;

export const LoginButtonGoogleStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  background: var(--white-bg);
  color: white;
  cursor: pointer;
`;

export const LoginEmailStyled = styled.p`
  color: var(--galletita);
  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;