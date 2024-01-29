import { useState } from 'react';
import { Snackbar } from '@mui/material';

interface TosterInterfaceProps {
  message?: string;
}

export const Toster = ({ message }: TosterInterfaceProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Snackbar
      message={message}
      open={isOpen}
      autoHideDuration={3000}
      onClose={() => setIsOpen(false)}
    />
  );
};
