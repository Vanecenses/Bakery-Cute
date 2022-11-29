import React, { useEffect } from 'react';
import Submit from '../../components/UI/Submit/Submit';
import { signInWithGoogle } from '../../firebase/firebase-utils';
import {
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
  LoginFormStyled,
  LoginInputStyled,
} from './LoginStyles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const {currentUser} = useSelector(state => state.user)

  const navigate = useNavigate()
  
  useEffect(() => {
    if(currentUser){
      navigate('/')
    }
  },[currentUser, navigate])

  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <LoginFormStyled>
        <LoginInputStyled type='text' placeholder='Email' />
        <LoginInputStyled type='password' placeholder='Password' />
        <p>O podés ingresar con</p>
        <LoginButtonGoogleStyled
          onClick={() => signInWithGoogle()}
        >
          <img style={{width:'30%'} }
            src='https://media.gq.com/photos/55e5f611e4fe554f30881157/16:9/w_1280,c_limit/Screen%20Shot%202015-09-01%20at%203.01.13%20PM.png'
            alt=''
          />
        </LoginButtonGoogleStyled>
        <LoginEmailStyled to='/'>
          <p>Crear una cuenta</p>
        </LoginEmailStyled>
        <Submit value='Ingresar' />
      </LoginFormStyled>
    </LoginContainerStyled>
  );
};

export default Login;
