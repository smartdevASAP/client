import Sidebar from "./sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import { Home, Rss, MessageSquare, Edit, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "/dashboard/home", label: "Home", icon: Home },
    { id: "/dashboard/feed", label: "Feed", icon: Rss },
    { id: "/dashboard/chats", label: "Chats", icon: MessageSquare },
    { id: "/dashboard/posts", label: "Post", icon: Edit },
    { id: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen relative">
      {/* Sidebar for md and up */}
      <div className="hidden md:block w-64 fixed top-0 left-0 h-screen bg-white shadow-lg">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64 overflow-y-auto h-screen pb-16 md:pb-0 p-4">
        <Routes>
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </div>

      {/* Bottom navigation bar for small screens */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg flex justify-around py-2 z-50">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex flex-col items-center justify-center text-xs ${
                isActive ? "text-blue-600" : "text-gray-500"
              }`}
            >
              <Icon size={20} />
              <span className="text-[10px] mt-1">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
