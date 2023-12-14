import { MarginInterface } from '../../types/styles';

export const CONTAINED_TYPE = 'contained';
export const OUTLINED_TYPE = 'outlined';
export const TEXT_TYPE = 'text';

export type ButtonVariantType =
  | typeof CONTAINED_TYPE
  | typeof OUTLINED_TYPE
  | typeof TEXT_TYPE;

export interface ButtonInterface extends MarginInterface {
  label: string;
  variant?: ButtonVariantType;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
