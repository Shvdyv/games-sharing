const API_URL = 'http://localhost:5204/api/account'; // ???

const logout = async () => {
  try {
    const response = await fetch(`${API_URL}/Logout`);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error while logging out:', error);
    throw error;
  }
};

const authenticate = async (login, password) => {
  try {
    const response = await fetch(`${API_URL}/Authenticate?login=${login}&password=${password}`);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error while authenticating:', error);
    throw error;
  }
};

const authenticateByToken = async (token) => {
  try {
    const response = await fetch(`${API_URL}/AuthenticateByToken?token=${token}`);
    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error ${response.status}: ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error while authenticating by token:', error);
    throw error;
  }
};

const register = async (login, password) => {
    const requestBody = {
      login: login,
      password: password,
    };
  
    try {
      const response = await fetch(`${API_URL}/Register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
    } catch (error) {
      console.error('Error while registering:', error);
      throw error;
    }
  };
  

const AccountService = {
  logout,
  authenticate,
  authenticateByToken,
  register,
};

export default AccountService;