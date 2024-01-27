import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const auth = true;

  const navigate = useNavigate();

  if (auth) {
    return <>{children}</>;
  } else {
    return (
      <>
        You don't have access
        <button onClick={() => navigate('/')}>LogIn</button>
      </>
    );
  }
};
