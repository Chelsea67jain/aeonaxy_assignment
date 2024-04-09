import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import FirstPage from "./UserInterface/FirstPage";
import UserInterestPage from "./UserInterface/UserInterestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<FirstPage />} path="/" />
        <Route element={<UserInterestPage />} path="/userinterest" />
      </Routes>
    </Router>
  );
}

export default App;
