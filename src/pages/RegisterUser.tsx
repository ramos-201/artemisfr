import { Button, Typography } from '@mui/material';
import AuthPageLayoutComponent from '../components/AuthPageLayoutComponent';
import InputFieldComponent from '../components/InputFieldComponent';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from './../Routes';

function RegisterUserPage (): JSX.Element {

  const [formInputFields, setFormInputFields] = useState({
    nameField: '',
    lastNameField: '',
    userField: '',
    emailField: '',
    mobilePhoneField: '',
    passwordField: '',
    confirmPasswordField: '',
    hasErrorNameField: false,
    hasErrorLastNameField: false,
    hasErrorUserField: false,
    hasErrorEmailField: false,
    hasErrorMobilePhoneField: false,
    hasErrorPasswordField: false,
    hasErrorConfirmPasswordField: false,
  })
  
  const [helperTextErrors, setHelperTextErrors] = useState({
    textMobilePhone: '',
    textConfirmPassword: ''
  })

  const handleSumit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    setFormInputFields(prevState => ({
      ...prevState,
      hasErrorNameField: formInputFields.nameField === '',
      hasErrorLastNameField: formInputFields.lastNameField === '',
      hasErrorUserField: formInputFields.userField === '',
      hasErrorEmailField: formInputFields.emailField === '',
      hasErrorMobilePhoneField: formInputFields.mobilePhoneField === '',
      hasErrorPasswordField: formInputFields.passwordField === '',
      hasErrorConfirmPasswordField: formInputFields.confirmPasswordField === '',
    })) 

    const isMobilePhoneValid = (/^[0-9]+$/.test(formInputFields.mobilePhoneField))
    if (formInputFields.mobilePhoneField && !isMobilePhoneValid) {
      setFormInputFields(prevState => ({
       ...prevState,
       hasErrorMobilePhoneField: true
      }))
      setHelperTextErrors(prevState => ({
       ...prevState,
        textMobilePhone: 'Este campo solo puede contener números.'
      }))
    }

    const isPasswordMatch = formInputFields.passwordField === formInputFields.confirmPasswordField
    if (formInputFields.passwordField && formInputFields.confirmPasswordField && !isPasswordMatch) {
      setFormInputFields(prevState => ({
       ...prevState,
       hasErrorConfirmPasswordField: true
      }))
      setHelperTextErrors(prevState => ({
       ...prevState,
        textConfirmPassword: 'Las contraseñas no coinciden.'
      }))
    }

    if (formInputFields.nameField && formInputFields.lastNameField && formInputFields.userField && formInputFields.emailField &&
      formInputFields.mobilePhoneField && isMobilePhoneValid && isPasswordMatch) {
        alert('Success...');
    }
  };

  return (
    <AuthPageLayoutComponent titleTG='Registrar Usuario' descriptionTG='Por favor ingresa los datos para continuar'>
      <form onSubmit={handleSumit}>
        <InputFieldComponent 
          value={formInputFields.nameField}
          label='Nombres'
          type='text'
          isError={formInputFields.hasErrorNameField}
          onChange={(e) => {
            setFormInputFields(prevState => ({
              ...prevState,
              nameField: e.target.value,
              hasErrorNameField: false,
            }))
          }}
        />
        <InputFieldComponent 
          value={formInputFields.lastNameField}
          label='Apellidos'
          type='text'
          isError={formInputFields.hasErrorLastNameField}
          onChange={(e) => {
            setFormInputFields(prevState => ({
              ...prevState,
              lastNameField: e.target.value,
              hasErrorLastNameField: false,
            }))
          }}
        />
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
          value={formInputFields.emailField}
          label='Email'
          type='email'
          isError={formInputFields.hasErrorEmailField}
          onChange={(e) => {
            setFormInputFields(prevState => ({
              ...prevState,
              emailField: e.target.value,
              hasErrorEmailField: false,
            }))
          }}
        />
        <InputFieldComponent 
          value={formInputFields.mobilePhoneField}
          label='Telefono'
          type='tel'
          isError={formInputFields.hasErrorMobilePhoneField}
          helperTextError={helperTextErrors.textMobilePhone}
          onChange={(e) => {
            setFormInputFields(prevState => ({
              ...prevState,
              mobilePhoneField: e.target.value,
              hasErrorMobilePhoneField: false,
            }))
            setHelperTextErrors(prevState => ({
              ...prevState,
              textMobilePhone: ''
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
              hasErrorPasswordField: false
            }))
          }}
        />
        <InputFieldComponent 
          value={formInputFields.confirmPasswordField}
          label='Confirmar Contraseña'
          type='password'
          isError={formInputFields.hasErrorConfirmPasswordField}
          helperTextError={helperTextErrors.textConfirmPassword}
          onChange={(e) => {
            setFormInputFields(prevState => ({
              ...prevState,
              confirmPasswordField: e.target.value,
              hasErrorConfirmPasswordField: false,
            }))
            setHelperTextErrors(prevState => ({
              ...prevState,
              textConfirmPassword: ''
            }))
          }}
        />
        <Button fullWidth type='submit' variant='contained' color='primary' size='large' sx={{ mt: 3 }} >
          Registrar usuario
        </Button>
      </form>
      <Typography sx={{ opacity: 0.5 }} >¿Ya tienes una cuenta?{' '} <Link to={AppRoutes.login}>Inicia sesion aquí</Link></Typography>
 </AuthPageLayoutComponent>
  )
}

export default RegisterUserPage;
