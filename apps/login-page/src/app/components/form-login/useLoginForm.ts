import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseLoginForm {
  email: string;
  password: string;
  changeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  login: () => void;
}

export function useLoginForm(): UseLoginForm {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const login = async () => {
    const data = {
      email,
      password
    }
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch {
      console.log('error');
    }
  };
  return { email, changeEmail, password, changePassword, login };
}

export default useLoginForm;

