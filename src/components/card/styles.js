// Third-party imports
import styled from 'styled-components';

import theme from '../theme';

////////////////////////////////////////////////////////////////////////////////

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: ${theme.shadows.grey};
  border-radius: 10px;
  background-color: ${theme.colors.white};
  @media (min-width: ${theme.breakpoints.xs}) {
    width: 250px;
  }
  @media (min-width: ${theme.breakpoints.sm}) {
    width: 280px;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
`;
export const Username = styled.p`
  font-size: ${theme.font.fontSizes.title._};
  font-family: ${theme.font.family.secondary};
  font-weight: 600;
`;
export const Text = styled.p`
  font-size: ${theme.font.fontSizes.description._};
  font-family: ${theme.font.family.primary};
  font-weight: 400;
  line-height: 25px;
  margin: 0;
`;
export const Image = styled.img`
  width: 100px;
  height: 100%;
`;
