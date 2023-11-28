import { ModalContainer } from './styled';
import { ModalProps } from './types';

export const Modal = ({ children, isOpen = false }: ModalProps) =>
  isOpen ? <ModalContainer>{children}</ModalContainer> : null;
