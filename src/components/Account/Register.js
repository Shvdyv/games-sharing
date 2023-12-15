import React, { useState } from 'react';
import AccountService from '/Users/Dell/games-sharing/src/services/AccountServiceTest';

const Register = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await AccountService.register(login, password);
    } catch (error) {
      console.error('Error while registering:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
