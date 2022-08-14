import LoginLogo from "../components/login_components/LoginLogo";
import LoginHeader from "../components/login_components/LoginHeader";
import LoginInputFields from "../components/login_components/LoginInputFields";
import LoginNewAccountLink from "../components/login_components/LoginNewAccountLink";
import LoginButton from "../components/login_components/LoginButton";

function LoginPage() {
  return (
    <div>
      <LoginLogo />
      <LoginHeader />
      <LoginInputFields />
      <LoginNewAccountLink />
      <LoginButton />
    </div>
  );
}

export default LoginPage;
