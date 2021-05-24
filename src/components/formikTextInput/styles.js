// Third-party imports
import styled from 'styled-components';

// Local imports
import theme  from '../theme';

////////////////////////////////////////////////////////////////////////////////

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  @media (min-width: ${theme.breakpoints.sm}) {
    width: 200px;
    margin-right: 14px;
    flex: 1;
    max-width: 300px;
  };
  @media (min-width: ${theme.breakpoints.sm}) {
    margin-right: 20px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid ${theme.colors.grey1};
  border-bottom: 1px solid
    ${({ isFieldInputValid }) =>
      isFieldInputValid ? theme.colors.grey1 : theme.colors.errorRed};
  color: ${({ isFieldInputValid }) =>
    isFieldInputValid ? theme.colors.grey2 : theme.colors.errorRed};
  margin-top: 7px;
  font-size: 18px;
  font-style: italic;
  font-family: ${ theme.font.family.primary};
  line-height: 20px;
  font-weight: 400;
  padding: 5px;
  outline: none;
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid ${theme.colors.grey1};
  background: ${theme.colors.white};
  border-bottom: 1px solid
    ${({ isFieldInputValid }) =>
      isFieldInputValid ? theme.colors.grey1 : theme.colors.errorRed};
  color: ${({ isFieldInputValid }) =>
    isFieldInputValid ? theme.colors.grey2 : theme.colors.errorRed};
  margin-top: 7px;
  font-size: 18px;
  font-style: italic;
  font-family: ${ theme.font.family.primary};
  line-height: 20px;
  font-weight: 400;
  padding: 5px;
  outline: none;
`;

export const ErrorStyle = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  font-size: 12px;
  color: ${theme.colors.errorRed}
`;
