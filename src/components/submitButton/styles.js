// Third-party imports
import styled from 'styled-components'
import {space, layout} from 'styled-system'


// Local imports
import theme  from '../theme';

////////////////////////////////////////////////////////////////////////////////
export const StyledButton = styled.button`
  background: ${theme.colors.black};
  text-transform: uppercase;
  color: ${theme.colors.white};
  padding: 12px;
  width: 100%;
  height: 46px;
  font-weight: 600;
  font-size: 16px;
  font-family: Graphik;
  outline: none;
  margin-left: 15px ;
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 7px;
    font-size: 12px;
  }
  ${space}
  ${layout}
`