import CreateAccountLogo from "../components/create_account_components/CreateAccountLogo";
import CreateAccountHeader from "../components/create_account_components/CreateAccountHeader";
import CreateAccountForm from "../components/create_account_components/CreateAccountForm";
import BackgroundCard from "../components/ui/BackgroundCard";

function CreateAccountPage() {
  return (
    <div>
      <BackgroundCard>
        <CreateAccountLogo />
        <CreateAccountHeader />
        <CreateAccountForm />
      </BackgroundCard>
    </div>
  );
}

export default CreateAccountPage;
