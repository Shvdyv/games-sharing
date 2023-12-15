import React, { useState } from 'react';
import AccountService from '/Users/Dell/games-sharing/src/services/AccountServiceTest';

const AuthenticateByToken = () => {
  const [token, setToken] = useState('');

  const handleAuthenticateByToken = async () => {
    try {
      await AccountService.authenticateByToken(token);
      //dodaj przełączenie wyświetlania na zalogowanego użytkownika
    } catch (error) {
      console.error('Error while authenticating by token:', error);
    }
  };

  return ( // na razie dla sprawdzenia
    <div>
      <input type="text" placeholder="Token" value={token} onChange={(e) => setToken(e.target.value)} />
      <button onClick={handleAuthenticateByToken}>Authenticate by Token</button>
    </div>
  );
};

export default AuthenticateByToken;
