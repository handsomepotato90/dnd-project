import { createContext } from "react";

export const LoginContext = createContext({
  isLoggedIn: false,
  userId:null,
  token:null,
  username:null,
  login: () => {},
  logout: () => {},
});
