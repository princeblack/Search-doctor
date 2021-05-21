// Third-party imports
import React from 'react';
import { Formik } from 'formik';

// Global imports

// Local imports
// import {loginSchema} from '@lib/yup';
import { StyledForm, FormikInputsContainer , FormButtonsContainer} from './styles';
import SubmitButton  from '../submitButton';
import FormikTextInput from '../formikTextInput';

////////////////////////////////////////////////////////////////////////////////

const formikEmailInputProps = {
  type: 'email',
  name: 'email',
  placeholder: 'Email*',
};

const formikPasswordInputProps = {
  name: 'password',
  placeholder: 'Password*',
};

const submitButtonProps = {
  width: { _: '100px', sm: '170px' },
  label: 'Log in',
};

/**
 * @function SeachingForm
 * @category Components
 * @description Displays a form to enable seaching.
 * @param {Function} onSubmit - Callback to fire with the form's submit data received as arguments.
 */
const SeachingForm = ({ onSubmit }) => {
  // Props
  const formikProps = {
    validateOnChange: false,
    validateOnBlur: true,
    validateOnSubmit: true,
    // ...loginSchema,
    onSubmit,
  };

  return (
    <Formik {...formikProps}>
      <StyledForm>
        <FormikInputsContainer>
          <FormikTextInput {...formikEmailInputProps} />
        </FormikInputsContainer>
        <FormButtonsContainer>
          <SubmitButton {...submitButtonProps} />
        </FormButtonsContainer>
      </StyledForm>
    </Formik>
  );
};

export default SeachingForm;
