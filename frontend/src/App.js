import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import CreateAccountPage from "./pages/CreateAccount";
import SearchGamesPage from "./pages/SearchGames";
import UserSettingsPage from "./pages/UserSettings";
import SimpleStatisticsPage from "./pages/SimpleStatistics";
import AdvancedStatistics from "./pages/AdvancedStatistics";
import News from "./pages/News";
import Admin from "./pages/Admin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/create-account" element={<CreateAccountPage />}></Route>
        <Route path="/search" element={<SearchGamesPage />}></Route>
        <Route path="/user-settings" element={<UserSettingsPage />}></Route>
        <Route
          path="/statistics-simple"
          element={<SimpleStatisticsPage />}
        ></Route>
        <Route
          path="/statistics-advanced"
          element={<AdvancedStatistics />}
        ></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
