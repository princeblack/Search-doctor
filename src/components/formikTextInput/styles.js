// Third-party imports
import styled from 'styled-components';

// Local imports
import theme  from '../theme';

////////////////////////////////////////////////////////////////////////////////

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
 `;

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid
    ${({ isFieldInputValid }) =>
      isFieldInputValid ? theme.colors.grey1 : theme.colors.errorRed};
  color: ${({ isFieldInputValid }) =>
    isFieldInputValid ? theme.colors.grey3 : theme.colors.errorRed};
  margin-top: 7px;
  font-size: 12px;
  font-style: italic;
  font-family: ${ theme.font.family.primary};
  line-height: 20px;
  font-weight: 400;
  padding: 5px;
`;

export const ErrorStyle = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  font-size: 10px;
`;
