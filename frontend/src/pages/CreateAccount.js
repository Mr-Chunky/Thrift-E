import CreateAccountLogo from "../components/create_account_components/CreateAccountLogo";
import CreateAccountHeader from "../components/create_account_components/CreateAccountHeader";
import CreateAccountForm from "../components/create_account_components/CreateAccountForm";
import UserInputCard from "../components/ui/UserInputCard";

function CreateAccountPage() {
  return (
    <div>
      <UserInputCard>
        <CreateAccountLogo />
        <CreateAccountHeader />
        <CreateAccountForm />
      </UserInputCard>
    </div>
  );
}

export default CreateAccountPage;
