import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import FirstPage from "./UserInterface/FirstPage";
import UserInterestPage from "./UserInterface/UserInterestPage";
import RightPlacePage from './UserInterface/RightPlacePage';
import UserMathComfortPage from './UserInterface/UserMathComfortPage';
import ReviewPage from './UserInterface/ReviewsPage';
import SearchingRecommendationPage from './UserInterface/SearchingRecommendationPage';
import LearningPathPage from './UserInterface/LearningPathPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<FirstPage />} path="/" />
        <Route element={<UserInterestPage />} path="/userinterest" />
        <Route element={<RightPlacePage />} path="/rightplacepage" />
        <Route element={<UserMathComfortPage />} path="/mathpage" />
        <Route element={<ReviewPage />} path="/reviewpage" />
        <Route element={<SearchingRecommendationPage />} path="/searchingpage" />
        <Route element={<LearningPathPage />} path="/learningpathpage" />

      </Routes>
    </Router>
  );
}

export default App;
