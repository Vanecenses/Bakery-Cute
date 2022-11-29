import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { registerInitialValues, registerValidationSchema } from '../../formik';


import Submit from '../../components/UI/Submit/Submit';
import LoginInput from '../../components/UI/LoginInput/LoginInput';

import {
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
  Form,
} from './RegisterStyles';
import { signInWithGoogle } from '../../firebase/firebase-utils';


const Register = () => {

const {currentUser} = useSelector(state => state.user)

const navigate = useNavigate()

useEffect(() => {
  if(currentUser){
    navigate('/')
  }
},[currentUser, navigate])


  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={values => console.log(values)}
      >
        <Form>
          <LoginInput name='name' type='text' placeholder='Nombre' />
          <LoginInput name='email' type='text' placeholder='Email' />
          <LoginInput name='password' type='password' placeholder='Password' />
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled
            type='button'
            onClick={() => signInWithGoogle()}
         
          >
            <img style={{width:'30%'} }
              src='https://media.gq.com/photos/55e5f611e4fe554f30881157/16:9/w_1280,c_limit/Screen%20Shot%202015-09-01%20at%203.01.13%20PM.png'
              alt=''
            />
          </LoginButtonGoogleStyled>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit>Registrarte</Submit>
        </Form>
      </Formik>


    </LoginContainerStyled>
  );
};

export default Register;
