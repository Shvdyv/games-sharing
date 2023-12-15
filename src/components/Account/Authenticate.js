import React, { useState } from 'react';
import AccountService from '/Users/Dell/games-sharing/src/services/AccountServiceTest';

const Authenticate = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await AccountService.authenticate(login, password);
      // dodaj przełączenie wyświetlania na zalogowanego użytkownika
    } catch (error) {
      console.error('Error while authenticating:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Authenticate;