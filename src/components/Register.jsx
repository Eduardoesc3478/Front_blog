import PropTypes from "prop-types";
import React, { useState } from "react";
import { Logo } from "./Logo";
import {
  validateEmail,
  validateEmailMessage,
  validatePassword,
  validatePasswordMessage,
  validateUsername,
  validateUsernameMessage,
} from "../shared/validators";
import { Input } from "./Input";
import { useRegister } from "../shared/hooks/useRegister";

export const Register = ({ switchAuthHandler }) => {
  const { register, isLoading } = useRegister();

  const [formState, setFormState] = useState({
    name: {
      value: "",
      isValid: false,
      showError: false,
    },
    surname: {
      value: "",
      isValid: false,
      showError: false,
    },
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    phone: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "name":
        isValid = (value);
        break;
      case "surname":
        isValid = (value);
        break;
      case "username":
        isValid = validateUsername(value);
        break;
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      
      case "phone":
        isValid = (value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    register(
      formState.name.value,
      formState.surname.value,
      formState.username.value,
      formState.email.value,
      formState.password.value,
      formState.phone.value
    );
  };

  const isSubmitDisabled =
    isLoading ||
    !formState.name.isValid ||
    !formState.surname.isValid ||
    !formState.username.isValid ||
    !formState.email.isValid ||
    !formState.password.isValid ||
    !formState.phone.isValid;

  return (
    <div className="register-container">
      <Logo text="Formulario de Registro" />
      <form className="auth-form">
        <Input
          field="name"
          label="Ingresa tu nombre"
          value={formState.name.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.name.showError}
          
        />
        <Input
          field="surname"
          label="Ingresa tu apellido"
          value={formState.surname.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.surname.showError}
          
        />
        <Input
          field="username"
          label="Ingresa tu username"
          value={formState.username.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.username.showError}
          validationMessage={validateUsernameMessage}
        />
        <Input
          field="email"
          label="Ingresa tu email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={validateEmailMessage}
        />
        <Input
          field="password"
          label="Ingresa tu contraseña"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type="password"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={validatePasswordMessage}
        />
        <Input
          field="phone"
          label="Ingresa tu número de teléfono"
          value={formState.phone.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.phone.showError}
          
        />
        <button onClick={handleRegister} disabled={isSubmitDisabled}>
          Crear Cuenta
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        ¿Ya tienes una cuenta?... Inicia sesión acá!!!
      </span>
    </div>
  );
};

Register.propTypes = {
  switchAuthHandler: PropTypes.func.isRequired,
};
