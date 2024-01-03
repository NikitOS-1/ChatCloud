import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary.primaryBlue};
  font-family: ${({ theme }) => theme.fonts.CarroisGothicSCRegular};
  font-size: ${({ theme }) => theme.fontSizes.Regular32};

  @media (max-width: 1120px) {
    font-size: ${({ theme }) => theme.fontSizes.Regular24};
  }
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.neutralColors[500]};
  font-family: ${({ theme }) => theme.fonts.CeraProRegular};
  font-size: ${({ theme }) => theme.fontSizes.Medium16};

  @media (max-width: 1120px) {
    font-size: ${({ theme }) => theme.fontSizes.Medium12};
  }
`;
