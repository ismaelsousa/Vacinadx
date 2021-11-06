import React, {createContext, useState} from 'react';

export const AuthContext = createContext({isLoggedIn: false});

export const AuthProvider: React.FC = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{isLoggedIn}}>{children}</AuthContext.Provider>
  );
};
