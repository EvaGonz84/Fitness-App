import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TrainingPage from "./pages/TrainingPage";
import UsersPage from "./pages/UsersPage";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route
          path="/training" element={<TrainingPage/>}
        />
         <Route
          path="/users" element={<UsersPage/>}
        />
         <Route
          path="*" element={<NotFoundPage/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
