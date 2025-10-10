import { Routes, Route } from "react-router-dom";
import Login from "../authentication/login";
import Layout from "../dashboard/layout";
// import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./protectedRoutes";

function AppRouter() {
  return (
    <Routes>
      {/* Public route unprotected */}
      <Route path="/" element={<Login />} />

      {/* Protected route */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            {/* <p>hello i am a protected route</p> */}
            <Layout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRouter;
