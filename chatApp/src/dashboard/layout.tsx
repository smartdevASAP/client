// import Sidebar from "./sidebar";
// import { Routes, Route } from "react-router-dom";
// import Chats from "./chats";
// import Feed from "./feed";
// import Home from "./home";
// import Post from "./post";
// import Settings from "./settings";

// function Layout() {
//   return (
//     <div className="flex gap-4">
//       <Sidebar />
//       <div className="flex-1 p-4">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/home" element={<Home />} /> */}
//           <Route path="/chats" element={<Chats />} />
//           <Route path="/feed" element={<Feed />} />
//           <Route path="/post" element={<Post />} />
//           <Route path="/settings" element={<Settings />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }
// export default Layout;

import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <div className="flex-1 p-4">
        {/* This renders the active child route */}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
