import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1.5rem 2rem;
  color: #251a1a;
  background-color: var(--white-bg);
  border-radius: 15px;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  outline: none;
  caret-color: #251a1a;

  ::placeholder {
    opacity: 80%;
  }
  -webkit-text-fill-color: #251a1a;
  
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--white-bg) inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
