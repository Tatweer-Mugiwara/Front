import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/Auth/ResetPassword";
import ResetConfirmation from "./pages/Auth/ResetConfirmation";
import PasswordUpdate from "./pages/Auth/PasswordUpdate";
import PasswordUpdateConfirm from "./pages/Auth/PasswordUpdateConfirm";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-[url('/images/Home/background.png')] flex items-center justify-center bg-cover bg-center min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="reset-confirmation" element={<ResetConfirmation />} />
          <Route path="password-update" element={<PasswordUpdate />} />
          <Route path="password-update-confirm" element={<PasswordUpdateConfirm />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
