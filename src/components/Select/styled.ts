import { Box, TextField } from '@mui/material';
import styled, { createGlobalStyle } from 'styled-components';

export const DropdownStyles = createGlobalStyle`
  &.MuiPaper-root{
  height: 278px !important;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
  }

  &.MuiPopper-root {
    top: 8px !important;
    

    & > .MuiPaper-rounded {
      border-radius: ${({ theme }) => theme.radius.input};
    } 
  }
`;

export const TextFieldStyled = styled(TextField)`
  .MuiFormLabel-root {
    font-family: ${({ theme }) => theme.fonts.CeraProMedium};
    font-size: ${({ theme }) => theme.fontSizes.Medium20};
    color: ${({ theme }) => theme.colors.neutralColors[300]};

    &.Mui-focused {
      color: ${({ theme }) => theme.colors.primary.primaryBlue};
    }

    &.Mui-error {
      color: ${({ theme }) => theme.colors.supporting.error};
    }
  }

  .MuiOutlinedInput-root.MuiInputBase-root {
    width: 495px;
    height: 57px;
    font-family: ${({ theme }) => theme.fonts.CeraProMedium};
    font-size: ${({ theme }) => theme.fontSizes.Medium20};

    fieldset {
      border: 2px solid ${({ theme }) => theme.colors.primary.blue30};
      border-radius: ${({ theme }) => theme.radius.input};
    }

    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.primary.blue50};
    }

    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors.primary.primaryBlue};
    }

    &.Mui-error fieldset {
      border-color: ${({ theme }) => theme.colors.supporting.error};
    }

    &.Mui-disabled fieldset {
      border-color: ${({ theme }) => theme.colors.neutralColors[200]};
    }
  }
`;

export const BoxStyled = styled(Box)`
  img {
    object-fit: cover;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 16px;
  }

  &.MuiBox-root {
    font-family: ${({ theme }) => theme.fonts.CeraProMedium};
    font-size: ${({ theme }) => theme.fontSizes.Medium20};
    color: ${({ theme }) => theme.colors.neutralColors[500]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutralColors[100]};
    }

    &.MuiAutocomplete-option[aria-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary.blue30};
    }
  }
`;
