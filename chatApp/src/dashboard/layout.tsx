import Sidebar from "./sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";

export default function Layout() {
  return (
    <div className="flex gap-4 min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <Routes>
          {/* 👇 remove the /dashboard prefix here */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}
