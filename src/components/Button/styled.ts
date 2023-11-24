import { css, keyframes } from 'styled-components';
import styled from 'styled-components';

import { ButtonProps } from '.';

export const ButtonContainer = styled.button<ButtonProps>`
  border-radius: 13px;
  border: none;
  width: 230px;
  height: 55px;
  font-family:${({ theme }) => theme.fonts.CeraProMedium}
  background-color: ${({ theme }) => theme.colors.primary.primaryYellow};
  color: ${({ theme }) => theme.colors.neutralColors.bgWhite};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.hover.yellow};
  }

  &:focus-visible {
    outline: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.pressed.yellow};
  }
  ${(props) =>
    props.disabled &&
    props.variant === 'container' &&
    css`
      background-color: ${({ theme }) => theme.colors.neutralColors[200]};

      &:hover {
        cursor: auto;
        background-color: ${({ theme }) => theme.colors.neutralColors[200]};
      }

      &:focus-visible {
        outline: none;
        cursor: auto;
        background-color: ${({ theme }) => theme.colors.neutralColors[200]};
      }
    `}

  ${(props) =>
    props.isLoading &&
    props.variant === 'container' &&
    css`
      background-color: ${({ theme }) => theme.colors.neutralColors[200]};
      cursor: wait;
      &:hover {
        cursor: wait;
        background-color: ${({ theme }) => theme.colors.neutralColors[200]};
      }

      &:focus-visible {
        outline: none;
        cursor: wait;
        background-color: ${({ theme }) => theme.colors.neutralColors[200]};
      }
    `}

  ${(props) =>
    props.variant === 'outlined' &&
    css`
      color: ${({ theme }) => theme.colors.primary.primaryYellow};
      border: 2px solid ${({ theme }) => theme.colors.primary.primaryYellow};
      background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};

      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};
        border-color: ${({ theme }) => theme.colors.hover.yellow};
        color: ${({ theme }) => theme.colors.hover.yellow};
      }

      &:focus-visible {
        outline: none;
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};
        border-color: ${({ theme }) => theme.colors.pressed.yellow};
        color: ${({ theme }) => theme.colors.pressed.yellow};
      }
    `}

  ${(props) =>
    props.disabled &&
    props.variant === 'outlined' &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.neutralColors[200]};
      background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};
      color: ${({ theme }) => theme.colors.neutralColors[200]};
      cursor: auto;

      &:hover {
        border: 2px solid ${({ theme }) => theme.colors.neutralColors[200]};
        background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};
        color: ${({ theme }) => theme.colors.neutralColors[200]};
        cursor: auto;
      }

      &:focus-visible {
        border: 2px solid ${({ theme }) => theme.colors.neutralColors[200]};
        background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};
        color: ${({ theme }) => theme.colors.neutralColors[200]};
        cursor: auto;
      }
    `}

    ${(props) =>
      props.isLoading &&
      props.variant === 'outlined' &&
      css`
        border: 2px solid ${({ theme }) => theme.colors.neutralColors[200]};
        background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};
        color: ${({ theme }) => theme.colors.neutralColors[200]};
        cursor: wait;

        &:hover {
          border: 2px solid ${({ theme }) => theme.colors.neutralColors[200]};
          background-color: ${({ theme }) =>
            theme.colors.neutralColors.bgWhite};
          color: ${({ theme }) => theme.colors.neutralColors[200]};
          cursor: wait;
        }

        &:focus-visible {
          border: 2px solid ${({ theme }) => theme.colors.neutralColors[200]};
          background-color: ${({ theme }) =>
            theme.colors.neutralColors.bgWhite};
          color: ${({ theme }) => theme.colors.neutralColors[200]};
          cursor: wait;
        }
      `}
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Spiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top: 3px solid #3498db;
  animation: ${spinAnimation} 0.5s linear infinite;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.Medium20};
  font-style: normal;
  line-height: normal;
  span {
    fill: inherit;
  }
`;

export const StartIcon = styled.span`
  margin-right: 8px;
  width: 24px;
  height: 24px;
`;

export const EndIcon = styled.span`
  margin-left: 8px;
  width: 24px;
  height: 24px;
`;
