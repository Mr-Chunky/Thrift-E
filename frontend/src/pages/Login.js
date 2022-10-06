import LoginLogo from "../components/login_components/LoginLogo";
import LoginHeader from "../components/login_components/LoginHeader";
import LoginInputForm from "../components/login_components/LoginInputForm";
import UserInputCard from "../components/ui/UserInputCard";

function LoginPage() {
  return (
    <div>
      <UserInputCard>
        <LoginLogo />
        <LoginHeader />
        <LoginInputForm />
      </UserInputCard>
    </div>
  );
}

export default LoginPage;
