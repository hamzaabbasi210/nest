import React, { createContext, useContext, useEffect, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    const is_login = localStorage.getItem("isLogin");
    setIsLogin(is_login);
  }, []);

  const SignOut = () => {
    const is_sign = localStorage.removeItem("isLogin");
    setIsLogin(is_sign);
  };
  const SignIn = () => {
    const is_login = localStorage.getItem("isLogin");
    setIsLogin(is_login);
  };

  return (
    <LoginContext.Provider value={{ isLogin, SignOut, SignIn }}>
      {children}
    </LoginContext.Provider>
  );
};
const useLoginContext = () => {
  return useContext(LoginContext);
};

export { LoginContext, useLoginContext, LoginProvider };
