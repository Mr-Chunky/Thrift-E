import LoginLogo from "../components/login_components/LoginLogo";
import LoginHeader from "../components/login_components/LoginHeader";
import LoginInputForm from "../components/login_components/LoginInputForm";
import BackgroundCard from "../components/ui/BackgroundCard";

function LoginPage() {
  return (
    <div>
      <BackgroundCard>
        <LoginLogo />
        <LoginHeader />
        <LoginInputForm />
      </BackgroundCard>
    </div>
  );
}

export default LoginPage;
