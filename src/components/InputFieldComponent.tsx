import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react';

interface Props {
  value: string;
  label: string;
  type: string;
  isError: boolean;
  helperTextError?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputFieldComponent({ value, label, type, isError, helperTextError = 'Este campo es requerido.', onChange }: Props): JSX.Element {
  
  const [isShowPassword, setIsShowPassword] = useState(false);

  return(
    <TextField
      required
      fullWidth
      type={type === 'password' && isShowPassword ? 'text' : type}
      value={value} 
      label={label}
      variant='standard'
      sx={{ mt: 1 }}
      error={isError}
      helperText={isError ? helperTextError : ''}
      onChange={onChange}
      slotProps={{
        input: {
          endAdornment: type === 'password' ? (
            <InputAdornment position='end'>
              <IconButton
                onClick={() => setIsShowPassword((prev)  => !prev)}
                onMouseDown={(e) => e.preventDefault()}
              >
                {isShowPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ) : undefined,
        },
      }}
    />
  )
}
