import React, { createContext, useEffect, useState } from 'react';
import api from '../utils/api';

export interface User {
  id: string;
  email: string;
  role?: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (data: { email: string; password: string; name?: string }) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  error: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: async () => false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async () => false,
  logout: () => {},
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('authUser');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await api.post<User>('/api/login', { email, password });
      setUser(data);
      localStorage.setItem('authUser', JSON.stringify(data));
      return true;
    } catch (err: any) {
      setError(err.message || 'Login failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (payload: { email: string; password: string; name?: string }) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await api.post<User>('/api/register', payload);
      setUser(data);
      localStorage.setItem('authUser', JSON.stringify(data));
      return true;
    } catch (err: any) {
      setError(err.message || 'Registration failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

