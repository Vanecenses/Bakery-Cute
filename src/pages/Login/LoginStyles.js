import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
    /* height: calc(100vh - 150px); */
`;

export const LoginInputStyled = styled.input`
  background-color: var(--white-bg);
  width: 300px;
  padding: 1.5rem 2rem;
  border-radius: 15px;
  border: none;
`;

export const LoginButtonGoogleStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
      color: white;
      transition: all 0.25s ease-out;
    }
  }
`;
export const LoginInputSubmitStyled = styled.input`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
`;
