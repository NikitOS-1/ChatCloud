import styled, { css } from 'styled-components';

import { InputProps } from '.';

export const InputContainer = styled.input<InputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 441px;
  height: 61px;
  border: 2px solid ${({ theme }) => theme.colors.primary.blue30};
  border-radius: 20px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.Medium20};
  font: ${({ theme }) => theme.fonts.CeraProMedium};
  color: ${({ theme }) => theme.colors.neutralColors.black900};
  padding: 0px 25px;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary.primaryBlue};
  }

  &:focus-visible {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.pressed.blue};
  }

  ${(props) =>
    props.isError &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.supporting.error};

      &:hover {
        border: 2px solid ${({ theme }) => theme.colors.supporting.error};
      }

      &:focus-visible {
        outline: none;
        border: 2px solid ${({ theme }) => theme.colors.supporting.error};
      }
    `}
`;
