import { useState } from "react";
import Sidebar from "./sidebar";
import Home from "./home";
import Chats from "./chats";
import Feed from "./feed";
import Post from "./post";
import Settings from "./settings";

export default function Layout() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "feed":
        return <Feed />;
      case "chats":
        return <Chats />;
      case "post":
        return <Post />;
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex gap-4 min-h-screen bg-gray-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 p-4">{renderPage()}</div>
    </div>
  );
}
