import LoginLogo from "../components/LoginLogo";
import LoginHeader from "../components/LoginHeader";
import LoginInputFields from "../components/LoginInputFields";
import LoginNewAccountLink from "../components/LoginNewAccountLink";
import LoginButton from "../components/LoginButton";

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