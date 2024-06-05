import { createContext, useContext } from "react";

interface ILoginContext {
  isLoggedIn: boolean;
  userId: string;
  token: string | null;
  google: boolean;
  username: string | null;
  dieFormulas: Array<string>; 
  login: (userId: string, username: string | null, token: string | null) => void;
  logout: () => void;
  googleAuth: (expiryDate: string, refreshToken: string, remember: boolean) => void;
}

const defaultLoginContext: ILoginContext = {
  isLoggedIn: false,
  userId: '',
  token: null,
  google: false,
  username: null,
  dieFormulas: [],
  login: () => {},
  logout: () => {},
  googleAuth: () => {},
};

export const LoginContext = createContext(defaultLoginContext);

export const useLoginContext = () => useContext(LoginContext);