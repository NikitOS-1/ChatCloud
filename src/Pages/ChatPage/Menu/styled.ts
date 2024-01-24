import { Badge } from '@mui/material';
import styled from 'styled-components';

export const MenuStyled = styled.div`
  box-sizing: border-box;
  width: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 2px solid ${({ theme }) => theme.colors.neutralColors[150]};
  background-color: ${({ theme }) => theme.colors.neutralColors[100]};

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
`;

export const OptionStyled = styled.div``;

export const ButtonStyled = styled.div`
  margin: 24px 0px;
  color: ${({ theme }) => theme.colors.neutralColors[500]};
  fill: ${({ theme }) => theme.colors.neutralColors[500]};

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.CeraProRegular};
    font-size: ${({ theme }) => theme.fontSizes.Medium14};
  }

  p {
    margin-top: 5px;
  }

  a:visited {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary.primaryBlue};
    fill: ${({ theme }) => theme.colors.primary.primaryBlue};
    cursor: pointer;
  }

  @media (max-width: 800px) {
    margin: 0px 32px;
  }
`;

export const BadgeStyled = styled(Badge)`
  .MuiBadge-badge {
    width: 22px;
    height: 22px;
    background-color: ${({ theme }) => theme.colors.primary.primaryYellow};
    color: white;
  }
`;

// ------------mobile menu -------------
export const MobileMenuStyled = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.neutralColors[150]};
  font-family: ${({ theme }) => theme.fonts.CeraProRegular};
  font-size: ${({ theme }) => theme.fontSizes.Medium14};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 801px) {
    display: none;
  }
`;
