export interface ButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  variant?: 'container' | 'outlined';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
}
