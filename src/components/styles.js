// Third-party imports
import styled from 'styled-components';

// Local imports
import theme  from './theme';

////////////////////////////////////////////////////////////////////////////////

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-width: 280px;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  background-image: url(${({src}) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: ${theme.breakpoints.xs}) {
    background-image: none;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ListOfDoctors = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  @media (min-width: ${theme.breakpoints.xs}) {
    flex-direction: row;
    justify-content: flex-start;
  }
  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const Note = styled.p`
  width: 100%;
  font-size: 40px;
  font-weight: 600;
  font-family: ${theme.font.family.secondary};
`