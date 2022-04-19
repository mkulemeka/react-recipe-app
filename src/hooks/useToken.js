import { useState } from "react";

export default function useToken() {
  const getIsAuth = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [isAuth, setIsAuth] = useState(getIsAuth());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setIsAuth(userToken.token);
  };

  return {
    setIsAuth: saveToken,
    isAuth,
  };
}
