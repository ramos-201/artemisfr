import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Checkbox, FormControlLabel, IconButton, InputAdornment } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginTitle = () => {
  return (
    <Typography variant="h4" sx={{ textAlign: 'center' }}>
      Iniciar Sesión
    </Typography>
  );
}

const LoginDescription = () => {
  return (
    <Typography 
      sx={{
        textAlign: 'center', 
        fontSize: '13px', 
        opacity: 0.6, 
        mt: 1
      }}
    >
      Bienvenido, por favor inicia sesión para continuar
    </Typography>
  );
}

const InputField = ({ label, type, value, onChange, error, helperText, endAdornment }) => {
  return (
    <TextField 
      required
      label={label} 
      type={type} 
      variant="standard"
      margin="normal" 
      size="small" 
      fullWidth
      sx={{ m: 1 }}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: endAdornment
      }}
    />
  )
}

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    setEmailError(email === '');
    setPasswordError(password === '');

    if (email && password) {
      alert(`Email: ${email}, Contraseña: ${password}`);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box>
      <InputField 
        label="Correo o Usuario" 
        type="email" 
        value={email} 
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError(false);
        }}
        error={emailError}
        helperText={emailError ? 'Este campo es requerido.' : ''}
      />
      <InputField 
        label="Contraseña" 
        type={showPassword ? 'text' : 'password'} 
        value={password} 
        onChange={(e) => {
          setPassword(e.target.value);
          setPasswordError(false);
        }}
        error={passwordError}
        helperText={passwordError ? 'Este campo es requerido.' : ''}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <Remember />
      <ButtonLogin onClickHandle={handleSubmit} />
    </Box>
  );
};

const Remember = () => {
  return (
    <FormControlLabel 
      control={<Checkbox name="remember" />} 
      label="Recuérdame" 
      sx={{ mt: 1, fontSize: '5px' }} 
      slotProps={{typography: {fontSize: '13px'}}}
    />
  )
}

const ButtonLogin = ({ onClickHandle }) => {
  return (
     <Button 
       variant="contained" 
       color="primary" 
       fullWidth 
       sx={{ mt: 2 }} 
       onClick={onClickHandle}
     >
       Iniciar Sesión
     </Button>
  )
}

function CustomLogin() {
  return (
    <Box 
      component="section" 
      sx={{
        bgcolor: '#f7f9fa', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
      }}
    >
      <Container 
        sx={{
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          bgcolor: 'white',
          boxShadow: 3,
          borderRadius: 4,
          width: '100%', 
          maxWidth: { xs: 350, sm: 400 },
          boxSizing: 'border-box',
          p: { xs: 3, sm: 5 },
        }}
      >
        <LoginTitle />
        <LoginDescription />
        <LoginForm />
      </Container>
    </Box>
  );
}

export default CustomLogin;
