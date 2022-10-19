import LoginLogo from "../components/login_components/LoginLogo";
import LoginHeader from "../components/login_components/LoginHeader";
import LoginInputForm from "../components/login_components/LoginInputForm";
import UserInputCard from "../components/ui/UserInputCard";
import React from "react";
import { useContext, useNavigate } from "react";
import CurrentUserContext from "../storage/current-user-context";

function LoginPage() {
  const navigate = useNavigate();
  const currentUserContext = useContext(CurrentUserContext);
  let userId;

  async function userLoginHandler(userLoginData) {
    try {
      userId = await fetch(
        `https://localhost:7076/api/users/${userLoginData.username}-${userLoginData.password}`
      ).then((response) => {
        console.log("HTTP Status Code: ", response.status);
        if (!response.ok) {
          console.log(response);
          throw new Error(`Error! Current Status: ${response.status}`);
        } else if (response.ok) {
          return response.json();
        }
      });
    } catch (err) {
      console.log(err);
    }
    currentUserContext.getCurrentUser(userId);
    console.log(userId);
  }

  return (
    <div>
      <UserInputCard>
        <LoginLogo />
        <LoginHeader />
        <LoginInputForm onHandleLogin={userLoginHandler} />
      </UserInputCard>
    </div>
  );
}

export default LoginPage;
