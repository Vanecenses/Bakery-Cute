import styled from 'styled-components';

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputStyled = styled.input`
  background-color: rgba(255, 255, 255, 0.9);
  outline: none;
  border: ${({ isError }) => (isError ? '1px solid #fb103d ' : 'none')};
  border-radius: 8px;
  height: 30px;
  padding: 0.5rem 1rem;
  color: #701e1e;
  width: 70%;
  margin-top: 1rem;

  ::placeholder {
    opacity: 60%;
  }
  -webkit-text-fill-color: #2f1616;
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
