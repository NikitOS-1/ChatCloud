import { Avatar } from '@mui/material';
import styled from 'styled-components';

import { MarginInterface } from '../../types/styles';

export const AvatarContainerStyled = styled('div')<MarginInterface>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 80px;
  position: relative;
  margin-top: ${({ margintop }) => margintop};
  margin-bottom: ${({ marginbottom }) => marginbottom};
  margin-left: ${({ marginleft }) => marginleft};
  margin-right: ${({ marginright }) => marginright};
`;

export const AvatarStyled = styled(Avatar)`
  &.MuiAvatar-root {
    width: 56px;
    height: 56px;
  }
`;

export const CountryBadgeStyled = styled(Avatar)`
  position: absolute;
  top: 33px;
  left: 50px;

  &.MuiAvatar-root {
    width: 21px;
    height: 21px;
  }
`;

export const OnlineBadgeStyled = styled.div`
  position: absolute;
  top: 0px;
  left: 50px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #6acf74;
`;

export const UserNameStyled = styled.div`
  text-align: center;
  margin-top: 8px;
  width: 100%;
  word-wrap: break-word;
  line-height: 1.2;
  overflow: auto;
  font-family: ${({ theme }) => theme.fonts.CeraProMedium};
  font-size: ${({ theme }) => theme.fontSizes.Medium14};
  color: ${({ theme }) => theme.colors.neutralColors[900]};
`;
