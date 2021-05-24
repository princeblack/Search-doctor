// Third-party imports
import styled from 'styled-components'
import {Form} from 'formik'
// Global imports

// Local imports
import { Flex } from '../styles'

////////////////////////////////////////////////////////////////////////////////

export const StyledForm = styled(Form).attrs({
    // Disables browser-level validation so that Formik validation doesn't clash with it
    noValidate: true,
  })`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

export const FormikInputsContainer = styled(Flex)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const FormButtonsContainer = styled(Flex)`
  width: 100%;
  justify-content: center;

`