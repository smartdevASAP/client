// // import { useState } from "react";
// import Dashboard from "./dashboard";
// import Sidebar from "./sidebar";
// import { Routes, Route } from "react-router-dom";

// // import Home from "./home";
// // import Chats from "./chats";
// // import Feed from "./feed";
// // import Post from "./post";
// // import Settings from "./settings";

// export default function Layout() {
//   // const [activePage, setActivePage] = useState("home");

//   // const renderPage = () => {
//   //   switch (activePage) {
//   //     case "home":
//   //       return <Home />;
//   //     case "feed":
//   //       return <Feed />;
//   //     case "chats":
//   //       return <Chats />;
//   //     case "post":
//   //       return <Post />;
//   //     case "settings":
//   //       return <Settings />;
//   //     default:
//   //       return <Home />;
//   //   }
//   // };

//   return (
//     <div className="flex gap-4 min-h-screen bg-gray-50">
//       <Sidebar />
//       <div className="flex-1">
//         <Routes>
//           <Route path="/dashboard/*" element={<Dashboard />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

//--new nested routing conscept
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";

export default function Layout() {
  return (
    <div className="flex gap-4 min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-4">
        <Dashboard />
      </div>
    </div>
  );
}
