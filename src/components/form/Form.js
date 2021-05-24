// Third-party imports
import React from 'react';
import { Formik } from 'formik';

// Global imports

// Local imports
import SearchingSchema from '../validation';
import {
  StyledForm,
  FormikInputsContainer,
  FormButtonsContainer,
} from './styles';
import SubmitButton from '../submitButton';
import FormikTextInput from '../formikTextInput';

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Form
 * @category Components
 * @description Displays a form to enable searching.
 * @param {Function} onSubmit - Callback to fire with the form's submit data received as arguments.
 */
const SeachingForm = ({ onSubmit }) => {
  // Props
  const formikCityInputProps = {
    type: 'text',
    name: 'city',
    placeholder: 'city*',
  };

  const formikFacilityInputProps = {
    type: 'text',
    name: 'facility',
    placeholder: 'facility',
  };
  
  const formikExpertiseInputProps = {
    type: 'select',
    name: 'area_of_expertise',
    placeholder: 'area of expertise*',
  };

  const submitButtonProps = {
    width: { _: '100px', sm: '170px' },
    label: 'Search',
  };

  const initialValues = {
    city: '',
    facility: '',
    area_of_expertise: '',
  };

  const formikProps = {
    validateOnChange: false,
    validateOnBlur: false,
    validateOnSubmit: true,
    initialValues: initialValues,
    validationSchema: SearchingSchema,
    onSubmit,
  };

  return (
    <Formik {...formikProps}>
      <StyledForm>
        <FormikInputsContainer>
          <FormikTextInput {...formikCityInputProps} />
          <FormikTextInput {...formikExpertiseInputProps}>
            <option value='' label='Select a area of expertise...' />
            <option value='Allergy and Immunology' label='Allergy and Immunology' />
            <option value='Anesthesiology' label='Anesthesiology' />
            <option value='Colon and Rectal Surgery' label='Colon and Rectal Surgery' />
            <option value='Dermatology' label='Dermatology' />
            <option value='Emergency Medicine' label='Emergency Medicine' />
          </FormikTextInput>
          <FormikTextInput {...formikFacilityInputProps} />
        </FormikInputsContainer>
        <FormButtonsContainer>
          <SubmitButton {...submitButtonProps} />
        </FormButtonsContainer>
      </StyledForm>
    </Formik>
  );
};

export default SeachingForm;
