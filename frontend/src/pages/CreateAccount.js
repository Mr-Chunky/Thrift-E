import CreateAccountLogo from "../components/create_account_components/CreateAccountLogo";
import CreateAccountHeader from "../components/create_account_components/CreateAccountHeader";
import CreateAccountInputFields from "../components/create_account_components/CreateAccountInputFields";
import CreateAccountButtonBar from "../components/create_account_components/CreateAccountButtonBar";

function CreateAccountPage() {
  return (
    <div>
      <CreateAccountLogo />
      <CreateAccountHeader />
      <CreateAccountInputFields />
      <CreateAccountButtonBar />
    </div>
  );
}

export default CreateAccountPage;
