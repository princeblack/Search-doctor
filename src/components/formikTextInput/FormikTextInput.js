// Third-party imports
import React from 'react';
import { ErrorMessage, useField } from 'formik';

// Local imports
import {
  InputContainer,
  StyledInput,
  StyledSelect,
  ErrorStyle,
} from './styles';

////////////////////////////////////////////////////////////////////////////////

/**
 * @function FormikTextInput
 * @category Components
 * @description Renders a text input used to enter a short string in a Formik form.
 * @param {string} placeholder - The placeholder visible in the input when the input value is the empty string.
 * @param {string} type - HTML type of the input. Can take the values 'text', 'select'.
 * @param {string} name - The name this input is referred to by the form it's contained in.
 */
const FormikTextInput = ({ type, name, placeholder, ...props }) => {
  // Hook
  const [field, meta] = useField(name);

  // Props
  const fieldInputProps = {
    ...field,
    type,
    placeholder,
    isFieldInputValid: !(meta.touched && meta.error),
  };

  return (
    <>
      {type === 'text' ? (
        <InputContainer {...props}>
          <StyledInput {...fieldInputProps} />
          <ErrorStyle>
            <ErrorMessage name={field.name} />
          </ErrorStyle>
        </InputContainer>
      ) : (
        <InputContainer {...props}>
          <StyledSelect {...fieldInputProps}>{props.children}</StyledSelect>
          <ErrorStyle>
            <ErrorMessage name={field.name} />
          </ErrorStyle>
        </InputContainer>
      )}
    </>
  );
};

export default FormikTextInput;
