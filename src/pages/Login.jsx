import React, { useState } from 'react';
import { Box, Container, Button, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { parentContainerStyles, centerContainerStyles } from './CustomLoginStyles';
import InputField from "./components/InputFieldComponent";


const RememberSection = () => {
  return (
    <FormControlLabel 
      control={ <Checkbox name="remember" /> } 
      label="Recuérdame" 
      sx={{ mt: 1, fontSize: '5px' }} 
      slotProps={{ typography: { fontSize: '13px' } }}
    />
  )
}

const ButtonLoginSection = () => {
  return (
     <Button 
       fullWidth 
       type="submit"
       variant="contained" 
       color="primary"
       sx={{mt: 2}}
     >
       Iniciar Sesión
     </Button>
  )
}

const LoginForm = () => {
  const [formFieldState, setFormFieldState] = useState({
    userFieldValue: '', 
    passwordFieldValue: '', 
    hasErrorUserFieldValue: false, 
    hasErrorPasswordFieldValue: false  
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormFieldState(prevState => ({
      ...prevState, 
      hasErrorUserFieldValue: formFieldState.userFieldValue === '', 
      hasErrorPasswordFieldValue: formFieldState.passwordFieldValue === ''
    }));
    
    if (formFieldState.userFieldValue  && formFieldState.passwordFieldValue) {
      alert(`Email: ${formFieldState.userFieldValue}, Contraseña: ${formFieldState.passwordFieldValue}`);
    }
  };
   
  const dataInputFields = [
    {
      label: 'Correo o Usuario',
      type: 'text',
      value: formFieldState.userFieldValue,
      isError: formFieldState.hasErrorUserFieldValue,
      onChange: (e) => {
        setFormFieldState(prevState => ({
          ...prevState, 
          userFieldValue: e.target.value, 
          hasErrorPasswordFieldValue: false,
        }));
      }
    },
    {
      label: 'Contraseña',
      type: 'password',
      value: formFieldState.passwordFieldValue,
      isError: formFieldState.hasErrorPasswordFieldValue,
      onChange: (e) => {
        setFormFieldState(prevState => ({
          ...prevState, 
          passwordFieldValue: e.target.value, 
          hasErrorPasswordFieldValue: false,
        }));
      }
    },
  ];
  
  return (
    <form onSubmit={handleSubmit}>
       {dataInputFields.map((field, index) => (
         <InputField 
            key={index} 
            label={field.label} 
            type={field.type} 
            value={field.value} 
            onChange={field.onChange} 
            isError={field.isError} 
            helperText={field.isError ? 'Este campo es requerido.' : ''}
         />
       ))}
      <RememberSection />
      <ButtonLoginSection onClickHandle={handleSubmit} />
    </form>
  );
};
  
function LoginView() {
  return (
    <Box component="section" sx={ parentContainerStyles } >
      <Container sx={ centerContainerStyles } >
        <Typography variant="h4" sx={{ textAlign: 'center' }} > 
          Iniciar Sesión
        </Typography>
         <Typography sx={{ textAlign: 'center', fontSize: '13px', opacity: 0.6, mt: 1 }} >
           Bienvenido, por favor inicia sesión para continuar
         </Typography>
        <LoginForm />
      </Container>
    </Box>
  );
}

export default LoginView;
