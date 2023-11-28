import styled from 'styled-components';

export const SelectWraper = styled.div`
  position: relative;
  max-width: 495px;
  font-family: ${({ theme }) => theme.fonts.CeraProMedium};
`;

export const SelectLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.Medium16};
  color: ${({ theme }) => theme.colors.neutralColors[300]};
`;

export const SelectButtonWraper = styled.div<{ $hasValue: boolean }>`
  height: 21px;
  padding: 20px 24px;
  border: 2px solid ${({ theme }) => theme.colors.primary.blue30};
  font-size: ${({ theme }) => theme.fontSizes.Medium20};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  color: ${({ theme, $hasValue }) =>
    $hasValue
      ? theme.colors.neutralColors.black900
      : theme.colors.neutralColors[300]};
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.hover.blue};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.colors.pressed.blue};
  }
`;

export const SelectList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  margin-top: 10px;
  width: 100%;
  height: ${({ $isOpen }) => ($isOpen ? '360px' : '0px')};
  overflow-y: auto;
  background-color: tomato;
  background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};
  border-radius: 20px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease-in-out;
`;

export const SelectItem = styled.li`
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: ${({ theme }) => theme.fontSizes.Medium20};
  color: ${({ theme }) => theme.colors.neutralColors[400]};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralColors[100]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.blue30};
  }
`;
