import { Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useState } from "react"


function App(): JSX.Element {

  const [userFieldForm, setUserFieldForm] = useState('');
  const [ passwordFieldForm, setPasswordFieldForm] = useState('');

  const [hasErrorUserFieldForm, setHasErrorUserFieldForm] = useState(false);
  const [hasErrorPasswordFieldForm, setHasErrorPasswordFieldForm] = useState(false);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const toggleShowPassword = (): void => { setIsShowPassword( (prev) => !prev) }
  
  const handleSumit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    setHasErrorUserFieldForm(userFieldForm === '')
    setHasErrorPasswordFieldForm(passwordFieldForm === '')

    if (userFieldForm && passwordFieldForm) {
      alert('Success...')
    }
  }

  return (
    <Box component="section" sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "rgb(244, 244, 244)" 
    }} >
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: 3,
        borderRadius: 4,
        p: 3,
        maxWidth: {sm: 500},
        bgcolor: "rgb(255, 255, 255)"
      }} >
        <Typography variant="h4" >
          Iniciar Sesion
        </Typography>
        <Typography sx={{
          fontSize: "18px",
          opacity: 0.6
        }} >
          Por favor inicia sesión para continuar
        </Typography>
    
        <form onSubmit={handleSumit} >
          <TextField 
            required
            fullWidth
            type="text" 
            value={userFieldForm} 
            label="Usuario"
            variant="standard"
            sx={{ mt: 3 }}
            error={hasErrorUserFieldForm}
            helperText={ hasErrorUserFieldForm ?  'Este campo es requerido.' : ''  }
            onChange={ (e) => { 
              setUserFieldForm(e.target.value)
              setHasErrorUserFieldForm(false)
            }} 
          />

          <TextField 
            required
            fullWidth
            type={ isShowPassword ? 'text' : 'password' }
            value={passwordFieldForm} 
            label="Contraseña"
            variant="standard"
            sx={{ mt: 3 }}
            error={hasErrorPasswordFieldForm}
            helperText={ hasErrorPasswordFieldForm ?  'Este campo es requerido.' : ''  }
            onChange={ (e) => {
              setPasswordFieldForm(e.target.value)
              setHasErrorPasswordFieldForm(false)
            }}
            slotProps={{
              input:{ 
                endAdornment: (
                  <InputAdornment position='end' >
                    <IconButton onClick={toggleShowPassword} onMouseDown={ (e) => e.preventDefault() } >
                      { isShowPassword ? <VisibilityOff /> : <Visibility /> }
                    </IconButton>
                  </InputAdornment>
              )}
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
  )
}

export default App
