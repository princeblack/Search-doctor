// Third-party imports
import React from 'react'
// Global imports

// Local imports
import {StyledButton} from './styles'
////////////////////////////////////////////////////////////////////////////////

/**
 * @function SubmitButton
 * @category Components
 * @description Styled button to use in a form to submit it on click.
 * @param {string} label - The label to put on the button.
 */
const SubmitButton = ({label, ...props}) => (
  <StyledButton as="button" type="submit" {...props}>
    {label}
  </StyledButton>
)

export default SubmitButton