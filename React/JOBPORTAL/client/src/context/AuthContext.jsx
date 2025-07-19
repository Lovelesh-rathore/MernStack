import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
  );

  const [isLogin, setIsLogin] = useState(false);
  const [isRecruiter, setIsRecruiter] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    setIsLogin(!!user);

    setIsAdmin(user?.role === "Admin");

    setIsRecruiter(user?.role === "Recruiter");
    
    setIsUser(user?.role === "User");
  }, [user]);

  const value = {
    user,
    setUser,
    isLogin,
    isAdmin,
    isRecruiter,
    isUser,
    setIsLogin,
    setIsAdmin,
    setIsRecruiter,
    setIsUser,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
