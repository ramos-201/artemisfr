import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import InputFieldComponent from '../components/InputFieldComponent';
import AuthPageLayoutComponent from '../components/AuthPageLayoutComponent';
import { Link } from 'react-router-dom';
import AppRoutes from './../Routes';

function LoginPage(): JSX.Element {

  const [formInputFields, setFormInputFields] = useState({
    userField: '',
    passwordField: '',
    hasErrorUserField: false,
    hasErrorPasswordField: false
  })
  
  const handleSumit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    setFormInputFields(prevState => ({
      ...prevState,
      hasErrorUserField: formInputFields.userField === '',
      hasErrorPasswordField: formInputFields.passwordField === '',
    })) 

    if (formInputFields.userField && formInputFields.passwordField) {
        alert('Success...');
    }
  };
  
  return (
    <AuthPageLayoutComponent titleTG='Iniciar Sesión' descriptionTG='Por favor inicia sesión para continuar'>
       <form onSubmit={handleSumit}>
          <InputFieldComponent 
            value={formInputFields.userField}
            label='Usuario'
            type='text'
            isError={formInputFields.hasErrorUserField}
            onChange={(e) => {
              setFormInputFields(prevState => ({
                ...prevState,
                userField: e.target.value,
                hasErrorUserField: false,
              }))
            }}
          />
          <InputFieldComponent 
            value={formInputFields.passwordField}
            label='Contraseña'
            type='password'
            isError={formInputFields.hasErrorPasswordField}
            onChange={(e) => {
              setFormInputFields(prevState => ({
                ...prevState,
                passwordField: e.target.value,
                hasErrorPasswordField: false,
              }))
            }}
          />
          <Button fullWidth type='submit' variant='contained' color='primary' size='large' sx={{ mt: 5 }} >
            Iniciar sesión
          </Button>
        </form>
        <Typography sx={{ opacity: 0.5, }} >¿No tienes una cuenta?{' '}<Link to={AppRoutes.registerUser}>Regístrate aquí</Link></Typography>
    </AuthPageLayoutComponent>
  );
}

export default LoginPage;