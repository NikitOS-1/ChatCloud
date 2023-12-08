import { Box, TextField } from '@mui/material';
import styled from 'styled-components';

// export const AutocompleteStyled = styled(Autocomplete)`
//   &.MuiAutocomplete-popper {
//     position: relative;
//     top: 10px;
//   }
// `;
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
