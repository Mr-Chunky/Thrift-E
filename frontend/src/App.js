import { Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import CreateAccountPage from "./pages/CreateAccount";

function App() {
  return (
    <div>
      <Route path="/">
        <LoginPage />
      </Route>
      <Route path="/create-account">
        <CreateAccountPage />
      </Route>
    </div>
  );
}

export default App;
