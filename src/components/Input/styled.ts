import TextField from '@mui/material/TextField';
import styled from 'styled-components';

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
      border-radius: 20px;
    }

    &:hover fieldset {
      border: 2px solid ${({ theme }) => theme.colors.primary.blue50};
    }

    &.Mui-focused fieldset {
      border: 2px solid ${({ theme }) => theme.colors.primary.primaryBlue};
    }

    &.Mui-disabled fieldset {
      border: 2px solid ${({ theme }) => theme.colors.neutralColors[200]};
    }

    &.Mui-error fieldset {
      border: 2px solid ${({ theme }) => theme.colors.supporting.error};
    }
  }
`;
