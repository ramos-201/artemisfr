import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PropTypes from "prop-types";

const InputField = ({
  label, 
  type = 'text', 
  value, 
  onChange, 
  isError, 
  helperText = '' 
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  
  const toggleShowPassword = () => { setIsShowPassword((prev) => !prev); };

  const typeShowPassword = isShowPassword ? 'text' : 'password';
  
  // isRequired = ?
  
  return (
    <TextField
      fullWidth
      label={label}
      type={ type === 'password' ? typeShowPassword : type }
      value={value}
      variant="standard"
      margin="normal"
      size="small"
      sx={{m: 1}}
      onChange={onChange}
      error={isError}
      helperText={helperText}
      slotProps={{
        input: {
          endAdornment: type === 'password' ? (
            <InputAdornment position="end" >
              <IconButton onClick={toggleShowPassword} onMouseDown={(e) => e.preventDefault()} >
                { isShowPassword ? <VisibilityOff /> : <Visibility /> }
              </IconButton>
            </InputAdornment>
          ) : null,
        },
      }}
    />
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type : PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  helperText: PropTypes.string,
};

export default InputField;
