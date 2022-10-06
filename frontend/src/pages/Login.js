import LoginLogo from "../components/login_components/LoginLogo";
import LoginHeader from "../components/login_components/LoginHeader";
import LoginInputFields from "../components/login_components/LoginInputFields";
import LoginNewAccountLink from "../components/login_components/LoginNewAccountLink";
import LoginButton from "../components/login_components/LoginButton";
import BackgroundCard from "../components/ui/BackgroundCard";

function LoginPage() {
  return (
    <div>
      <BackgroundCard>
        <LoginLogo />
        <LoginHeader />
        <LoginInputFields />
        <LoginNewAccountLink />
        <LoginButton />
      </BackgroundCard>
    </div>
  );
}

export default LoginPage;
