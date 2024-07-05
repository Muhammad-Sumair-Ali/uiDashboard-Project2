import Cookies from 'js-cookie';
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = Cookies.get('users');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const loginUser = (userData) => {
    setUser(userData);
    Cookies.set('users', JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    Cookies.remove('users');
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
