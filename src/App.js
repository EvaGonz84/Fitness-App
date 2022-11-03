import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import UserProvider from "./context/UserProvider";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TrainingPage from "./pages/TrainingPage";
import UsersPage from "./pages/UsersPage/UsersPage";


function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/training"
            element={
              <RequireAuth>
                <TrainingPage />
              </RequireAuth>
            }
          />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
