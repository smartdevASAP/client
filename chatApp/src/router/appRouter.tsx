// import { Routes, Route } from "react-router-dom";
// //import Login from "../authentication/login";
// import Layout from "../dashboard/layout";
// // import Dashboard from "../pages/Dashboard";
// import ProtectedRoute from "./protectedRoutes";
// function AppRouter() {
//   return (
//     <Routes>
//       {/* Public route unprotected */}
//       <Route path="/" element={<Layout />} />
//       {/* Protected route */}
//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             {/* <p>hello i am a protected route</p> */}
//             <Layout />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default AppRouter;

//--NEW CODE
// import { Routes, Route } from "react-router-dom";
// import Layout from "../dashboard/layout";
// // import ProtectedRoute from "./protectedRoutes";

// function AppRouter() {
//   return (
//     <Routes>
//       {/* Everything under Layout */}
//       {/* <Route path="/*" element={<Layout />} /> */}

//       {/* If you later want a protected route */}
//       <Route path="/dashboard/*" element={<Layout />} />
//     </Routes>
//   );
// }

// export default AppRouter;

//--CODE ABOVE IS WORKING

import { Routes, Route } from "react-router-dom";
import Layout from "../dashboard/layout";
import Dashboard from "../dashboard/dashboard";

function AppRouter() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Layout />}>
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
