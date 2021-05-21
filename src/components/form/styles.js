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
    width: 100%;
  `;

export const FormikInputsContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
`;

export const FormButtonsContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`