import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import CreateAccountPage from "./pages/CreateAccount";
import SearchGamesPage from "./pages/SearchGames";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/create-account" element={<CreateAccountPage />}></Route>
        <Route path="/search" element={<SearchGamesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
