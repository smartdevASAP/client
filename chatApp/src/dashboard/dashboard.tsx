import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Feed from "./feed";
import Chats from "./chats";
import Posts from "./post";
import Settings from "./settings";

const Dashboard = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="chats" element={<Chats />} />
      <Route path="feed" element={<Feed />} />
      <Route path="posts" element={<Posts />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default Dashboard;
