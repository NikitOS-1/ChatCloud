import styled from 'styled-components';

export const Container = styled.div`
  padding: 118px 92px 0px 92px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 800px) {
    padding: 0px;
    width: 100%;
  }
`;

export const H1 = styled.h1`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary.primaryBlue};
  font-family: ${({ theme }) => theme.fonts.CarroisGothicSCRegular};
  font-size: ${({ theme }) => theme.fontSizes.Regular32};

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSizes.Medium20};
  }
`;

export const P = styled.p`
  margin-bottom: 80px;
  color: ${({ theme }) => theme.colors.neutralColors[500]};
  font-family: ${({ theme }) => theme.fonts.CeraProRegular};
  font-size: ${({ theme }) => theme.fontSizes.Medium16};

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSizes.Medium12};
  }
`;
