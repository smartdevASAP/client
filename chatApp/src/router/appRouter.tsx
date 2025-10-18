import { Routes, Route } from "react-router-dom";
import Layout from "../dashboard/layout";

export default function AppRouter() {
  return (
    <Routes>
      {/* Everything under the dashboard layout */}
      <Route path="/dashboard/*" element={<Layout />} />
    </Routes>
  );
}
