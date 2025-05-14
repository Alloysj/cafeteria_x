import React from "react";

const AuthContext = React.createContext({
  user: null, 
    login: (username: string, password: string) => Promise<void>,
    logout: () => Promise<void>,
    register: (username: string, password: string) => Promise<void>,
    isLoading: false,
    error: null,
});

export default AuthContext;