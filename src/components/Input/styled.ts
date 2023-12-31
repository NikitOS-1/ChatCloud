import TextField from '@mui/material/TextField';
import styled from 'styled-components';

export const TextFieldStyled = styled(TextField)`
  height: 75px;

  .MuiFormLabel-root {
    font-family: ${({ theme }) => theme.fonts.CeraProMedium};
    font-size: ${({ theme }) => theme.fontSizes.Medium16};
    color: ${({ theme }) => theme.colors.neutralColors[300]};

    &.Mui-focused {
      color: ${({ theme }) => theme.colors.primary.primaryBlue};
    }
    &.Mui-error {
      color: ${({ theme }) => theme.colors.supporting.error};
    }
  }

  .MuiOutlinedInput-root.MuiInputBase-root {
    height: 52px;
    font-family: ${({ theme }) => theme.fonts.CeraProMedium};
    font-size: ${({ theme }) => theme.fontSizes.Medium16};

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
