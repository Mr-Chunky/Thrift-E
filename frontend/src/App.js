import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import CreateAccountPage from "./pages/CreateAccount";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/create-account" element={<CreateAccountPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
