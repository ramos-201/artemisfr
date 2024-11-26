import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material"
import { useState } from "react";

interface Props {
  value: string;
  isError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputFieldComponent( { value, isError, onChange }: Props ): JSX.Element {
  
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = (): void => setIsShowPassword((prev) => !prev)

  return(
    <TextField
      required
      fullWidth
      type={isShowPassword ? 'text' : 'password'}
      value={value}
      label="Contraseña"
      variant="standard"
      sx={{mt: 3}}
      error={isError}
      helperText={ isError ? 'Este campo es requerido.' : '' }
      onChange={onChange}
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
  )
}