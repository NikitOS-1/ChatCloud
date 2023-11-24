import { InputContainer, InputProps } from '.';

const Input: React.FC<InputProps> = ({ isError }) => {
  return <InputContainer isError={isError} type="text" />;
};
export default Input;
