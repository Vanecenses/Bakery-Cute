import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import {
  createUserProfileDocument,
  signInUser,
  signInWithGoogle,
} from '../../firebase/firebase-utils';
import { loginInitialValues, loginValidationSchema } from '../../formik';


import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
  LoginPasswordStyled,
} from './LoginStyles';
import useRedirect from '../../hooks/useRedirect';


const Login = () => {

  useRedirect('/')

  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async values => {
          try {
            const { user } = await signInUser(values.email, values.password);
            createUserProfileDocument(user);
          } catch (error) {
            if (error.code === 'auth/wrong-password') {
              alert('Contraseña incorrecta');
            }
            if (error.code === 'auth/user-not-found') {
              alert('Usuario no encontrado');
            }
          }
        }}
      >
        <Form>
          <LoginInput name='email' type='text' placeholder='Email' />
          <LoginInput name='password' type='password' placeholder='Password' />
          <Link to='/forgot-password'>
            <LoginPasswordStyled>
              ¿Olvidaste la contraseña? Reestablecela
            </LoginPasswordStyled>
          </Link>
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled type='button' onClick={signInWithGoogle}>
          <img style={{width:'30%'} }
            src='https://media.gq.com/photos/55e5f611e4fe554f30881157/16:9/w_1280,c_limit/Screen%20Shot%202015-09-01%20at%203.01.13%20PM.png'
            alt=''
          />
       
       </LoginButtonGoogleStyled>
          <Link to='/register'>
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
          <Submit>Ingresar</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
