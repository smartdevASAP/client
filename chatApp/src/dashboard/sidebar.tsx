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

  // Detect screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      const small = window.innerWidth < 768; // Tailwind's "md" breakpoint
      setIsSmallScreen(small);
      setCollapsed(small); // auto-collapse when small
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    // Disable toggle on small screens
    if (isSmallScreen) return;
    setCollapsed((prev) => !prev);
  };

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
            className={`ml-auto p-2 rounded-md transition-colors ${
              isSmallScreen
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            title={
              isSmallScreen
                ? "Unavailable on small screens"
                : collapsed
                ? "Expand"
                : "Collapse"
            }
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
                title={collapsed ? item.label : undefined}
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
                    <p className="text-xs text-gray-400">
                      {item.id === "feed" ? "Curated" : ""}
                    </p>
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
