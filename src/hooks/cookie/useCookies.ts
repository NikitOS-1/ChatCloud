import { useState } from 'react';

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

function setCookie(name: string, value: string, days: number) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function useCookies(cookieName: string) {
  const [cookieValue, setCookieValue] = useState<string | null>(() => {
    return getCookie(cookieName);
  });

  const updateCookie = (value: string, days: number) => {
    setCookieValue(value);
    setCookie(cookieName, value, days);
  };

  return { cookieValue, updateCookie };
}

export default useCookies;
