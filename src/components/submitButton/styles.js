// Third-party imports
import styled from 'styled-components'
import {space, layout} from 'styled-system'


// Local imports

////////////////////////////////////////////////////////////////////////////////
export const StyledButton = styled.button`
  background: ${({theme}) => theme.colors.black};
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.white};
  padding: 12px;
  width: 100%;
  height: 46px;
  font-weight: 600;
  font-size: 16px;
  font-family: Graphik;
  @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
    height: 25px;
    padding: 7px;
    font-size: 12px;
  }
  ${space}
  ${layout}
`