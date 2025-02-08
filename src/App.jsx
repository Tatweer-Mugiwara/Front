import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./middleware/PrivateRoute";

import Home from "./pages/Home";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/Auth/ResetPassword";
import ResetConfirmation from "./pages/Auth/ResetConfirmation";
import PasswordUpdate from "./pages/Auth/PasswordUpdate";
import PasswordUpdateConfirm from "./pages/Auth/PasswordUpdateConfirm";

import Upgrade from "./pages/Upgrade";
import Support from "./components/User/Support/UserSupportLayer";
import FeaturesContent from "./components/User/Feature/FeatureContent";

import InterTruckLoadContent from "./pages/Explore/Optimize/InterTruckLoad";
import IntraTruckLoad from "./pages/Explore/Optimize/IntraTruckLoad";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-[url('/images/Home/background.png')] flex items-center justify-center bg-cover bg-center min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/support" element={<Support />} />
        <Route path="/auth" elemqseds>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="reset-confirmation" element={<ResetConfirmation />} />
          <Route path="password-update" element={<PasswordUpdate />} />
          <Route
            path="password-update-confirm"
            element={<PasswordUpdateConfirm />}
          />
        </Route>
        <Route path="/explore">
          <Route index element={<PrivateRoute element={<FeaturesContent />} />} />
          <Route path="inter-truck-load" element={<PrivateRoute element={<InterTruckLoadContent />} />} />
          <Route path="intra-truck-load" element={<PrivateRoute element={<IntraTruckLoad />} />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
