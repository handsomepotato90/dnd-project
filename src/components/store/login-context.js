import { createContext } from "react";

export const LoginContext = createContext({
  isLoggedIn: false,
  userId:null,
  token:null,
  google:false,
  login: () => {},
  logout: () => {},
  googleAuth:()=>{},
});
