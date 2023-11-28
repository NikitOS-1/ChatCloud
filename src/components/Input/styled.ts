import styled from 'styled-components';

export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.Medium16};
  font-family: ${({ theme }) => theme.fonts.CeraProMedium};
  color: ${({ theme }) => theme.colors.neutralColors[300]};
  margin-bottom: 10px;
  display: block;
`;

export const InputStyled = styled.input<{ $isError: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 441px;
  height: 61px;
  border: 2px solid
    ${({ theme, $isError }) =>
      $isError ? theme.colors.supporting.error : theme.colors.primary.blue30};
  border-radius: 20px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.Medium20};
  font-family: ${({ theme }) => theme.fonts.CeraProMedium};
  color: ${({ theme }) => theme.colors.neutralColors.black900};
  padding: 0px 25px;

  &:hover {
    border: 2px solid
      ${({ theme, $isError }) =>
        $isError
          ? theme.colors.supporting.error
          : theme.colors.primary.primaryBlue};
  }

  &:focus-visible {
    outline: none;
    border: 2px solid
      ${({ theme, $isError }) =>
        $isError ? theme.colors.supporting.error : theme.colors.pressed.blue};
  }
`;
