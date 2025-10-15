import { useState, useEffect } from "react";
import {
  MessageSquare,
  Edit,
  Home,
  Rss,
  Settings,
  Search,
  Menu,
  ChevronLeft,
} from "lucide-react";
import { motion } from "framer-motion";

type SidebarProps = {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  initialCollapsed?: boolean;
};

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "feed", label: "Feed", icon: Rss },
  { id: "chats", label: "Chats", icon: MessageSquare },
  { id: "post", label: "Post", icon: Edit },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({
  activePage,
  setActivePage,
  initialCollapsed = false,
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth < 768;
      setIsSmallScreen(small);
      setCollapsed(small); // always collapsed on small screens
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    if (isSmallScreen) return;
    setCollapsed((prev) => !prev);
  };

  // If on small screen → bottom navbar
  if (isSmallScreen) {
    return (
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex justify-around py-2 z-50">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
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
    );
  }

  // Default desktop sidebar
  return (
    <aside
      className={`bg-white text-gray-800 shadow-lg rounded-2xl p-3 transition-all duration-300 flex flex-col justify-between border border-gray-100`}
      style={{ width: collapsed ? 72 : 260 }}
      aria-label="Primary sidebar"
    >
      <div>
        {/* Top: Logo + toggle */}
        <div className="flex items-center gap-3 px-1 mb-6">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
              K
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Kelvin UI
                </h1>
                <p className="text-xs text-gray-500">Developer</p>
              </div>
            )}
          </motion.div>

          <button
            onClick={handleToggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="ml-auto p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Nav items */}
        <nav aria-label="Main navigation" className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`w-full flex items-center gap-3 rounded-xl p-2 hover:bg-gray-100 transition-colors ${
                  isActive ? "bg-blue-50 ring-1 ring-blue-200" : ""
                }`}
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg">
                  <Icon size={18} />
                </div>

                {!collapsed && (
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">
                        {item.label}
                      </span>
                      {item.id === "chats" && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                          3
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom utilities */}
      <div className="mt-4">
        {!collapsed && (
          <div className="mb-3 px-1">
            <label htmlFor="quickSearch" className="sr-only">
              Quick search
            </label>
            <div className="relative">
              <input
                id="quickSearch"
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg border border-gray-200 p-2 pl-10 text-sm bg-white focus:ring-2 focus:ring-blue-200"
              />
              <div className="pointer-events-none absolute left-3 top-2.5 text-gray-400">
                <Search size={16} />
              </div>
            </div>
          </div>
        )}

        <div className="mt-3 px-1 text-xs text-gray-500">
          {!collapsed ? (
            <>
              Logged in as <strong>Kelvin</strong>
            </>
          ) : (
            <div className="text-center">v1.0</div>
          )}
        </div>
      </div>
    </aside>
  );
}
