import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({}) => {
  const [user, setUser] = useState(null);

  const login = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };
};
