import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import ProtectedRoute from "./Component/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/netflixclone" element={<Home />} />
          <Route path="/netflixclone/login" element={<Login />} />
          <Route path="/netflixclone/signup" element={<SignUp />} />
          <Route
            path="/netflixclone/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
