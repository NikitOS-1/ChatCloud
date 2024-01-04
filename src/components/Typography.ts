import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary.primaryBlue};
  font-family: ${({ theme }) => theme.fonts.CarroisGothicSCRegular};
  font-size: ${({ theme }) => theme.fontSizes.Regular28};

  @media (max-width: 1190px) {
    font-size: ${({ theme }) => theme.fontSizes.Regular24};
  }

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSizes.Medium20};
  }
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.neutralColors[500]};
  font-family: ${({ theme }) => theme.fonts.CeraProRegular};
  font-size: ${({ theme }) => theme.fontSizes.Medium14};

  @media (max-width: 1190px) {
    font-size: ${({ theme }) => theme.fontSizes.Medium12};
  }

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSizes.Medium10};
  }
`;
