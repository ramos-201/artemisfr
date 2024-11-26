import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

function App(): JSX.Element {
  const [formInputFields, setFormInputFields] = useState({
      UserField: '',
      PasswordField: '',
      hasErrorUserField: false,
      hasErrorPasswordField: false
  })

  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = (): void => setIsShowPassword((prev) => !prev)
  

  const handleSumit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setFormInputFields( prevState => ({
      ...prevState,
      hasErrorUserField: formInputFields.UserField === '',
      hasErrorPasswordField: formInputFields.PasswordField === '',
    })) 
    

    if (formInputFields.UserField && formInputFields.PasswordField) {
      alert("Success...");
    }
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgb(244, 244, 244)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          boxShadow: 3,
          borderRadius: 4,
          p: 3,
          maxWidth: { sm: 500 },
          bgcolor: "rgb(255, 255, 255)",
        }}
      >
        <Typography variant="h4">Iniciar Sesión</Typography>
        <Typography
          sx={{
            fontSize: "18px",
            opacity: 0.6,
          }}
        >
          Por favor inicia sesión para continuar
        </Typography>

        <form onSubmit={handleSumit}>
          <TextField
            required
            fullWidth
            type="text"
            value={formInputFields.UserField}
            label="Usuario"
            variant="standard"
            sx={{mt: 3}}
            error={formInputFields.hasErrorUserField}
            helperText={ formInputFields.hasErrorUserField ? 'Este campo es requerido.' : '' }
            onChange={ (e) => {
              setFormInputFields( prevState => ({
                ...prevState,
                UserField: e.target.value,
                hasErrorUserField: false,
              }))
            }}
          />

          <TextField
            required
            fullWidth
            type={isShowPassword ? 'text' : 'password'}
            value={formInputFields.PasswordField}
            label="Contraseña"
            variant="standard"
            sx={{mt: 3}}
            error={formInputFields.hasErrorPasswordField}
            helperText={ formInputFields.hasErrorPasswordField ? 'Este campo es requerido.' : '' }
            onChange={ (e) => {
              setFormInputFields( prevState => ({
                ...prevState,
                PasswordField: e.target.value,
                hasErrorPasswordField: false,
              }))
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={toggleShowPassword}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      {isShowPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3 }}
          >
            Iniciar sesión
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default App;
