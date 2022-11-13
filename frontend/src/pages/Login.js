import LoginLogo from "../components/login_components/LoginLogo";
import LoginHeader from "../components/login_components/LoginHeader";
import LoginInputForm from "../components/login_components/LoginInputForm";
import UserInputCard from "../components/ui/UserInputCard";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../storage/current-user-context";

function LoginPage() {
  const [loginData, setLoginData] = useState();
  const navigate = useNavigate();
  const currentUserContext = useContext(CurrentUserContext);

  function getLoginData(userLoginData) {
    setLoginData(userLoginData);
  }

  useEffect(() => {
    if (loginData?.username && loginData?.password) {
      try {
        fetch(
          `http://localhost/LoginService/api/users/${loginData.username}-${loginData.password}`
        ).then(async (response) => {
          console.log(">Login Page: HTTP Status Code - ", response.status);
          if (!response.ok) {
            console.log(response);
            throw new Error(
              `>Login Page: Error! Current Status - ${response.status}`
            );
          } else if (response.ok) {
            let userData = await response.json();
            console.log(
              `>Login Page: User Metadata Received -\n${JSON.stringify(
                userData,
                undefined,
                2
              )}`
            );
            currentUserContext.getCurrentUser(userData._userId);
            currentUserContext.getCurrentUserType(userData.userType);
            currentUserContext.getCurrentUserBanStatus(userData.banStatus);
            window.localStorage.setItem("userId", userData._userId);
            window.localStorage.setItem("userType", userData.userType);
            window.localStorage.setItem("banStatus", userData.banStatus);
            navigate("/search", { replace: true });
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [loginData]);

  return (
    <div>
      <UserInputCard>
        <LoginLogo />
        <LoginHeader />
        <LoginInputForm onGetLoginData={getLoginData} />
      </UserInputCard>
    </div>
  );
}

export default LoginPage;
