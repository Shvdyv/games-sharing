import React from 'react';
import AccountService from '/Users/Dell/games-sharing/src/services/AccountServiceTest';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await AccountService.logout();
      // dodaj przełączenie wyświetlania na strony dostępne dla niezalogowanych użytkowników
    } catch (error) {
      console.error('Error while logging out:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;