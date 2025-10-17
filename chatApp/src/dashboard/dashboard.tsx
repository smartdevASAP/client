import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Feed from "./feed";
import Chats from "./chats";
import Posts from "./post";
import Settings from "./settings";

const Dashboard = () => {
  return (
    <div className="p-6 flex-1">
      <Routes>
        {/* Default route — shown at /dashboard */}
        <Route index element={<Home />} />

        {/* ✅ Use relative paths, not absolute */}
        <Route path="chats" element={<Chats />} />
        <Route path="feed" element={<Feed />} />
        <Route path="posts" element={<Posts />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
