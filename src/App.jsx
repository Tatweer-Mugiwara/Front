import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./middleware/PrivateRoute";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

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
import Routing from "./pages/Explore/Optimize/Routing";
import RealTimeResponsivness from "./pages/Explore/Optimize/RealTimeResponsivness";
import RealTimeResponsivnessElement from "./pages/Explore/Optimize/RealTimeResponsivnessElement";

import "react-toastify/dist/ReactToastify.css";
import "keen-slider/keen-slider.min.css";

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
          <Route index element={<FeaturesContent />} />
          <Route path="inter-truck-load" element={<PrivateRoute element={<InterTruckLoadContent />} />} />
          <Route path="intra-truck-load" element={<PrivateRoute element={<IntraTruckLoad />} />} />
          <Route path="routing" element={<PrivateRoute element={<Routing />} />} />
          <Route path="real-time-responsivness" element={<PrivateRoute element={<RealTimeResponsivness />} />} />
          <Route path="real-time-responsivness/:tid" element={<PrivateRoute element={<RealTimeResponsivnessElement />} />} />
          {/* <Route path="planification-coordination" element={<PrivateRoute element={<PlanificationCoordination />} />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
