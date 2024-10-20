import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom"
import { AuthContextProvider } from "./context/AutContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account"
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <div className="">
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" 
        element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
            }  
        />
      </Routes>
    </AuthContextProvider>
    </div>
  );
}

export default App;
