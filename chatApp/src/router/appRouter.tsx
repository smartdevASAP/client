// import { Routes, Route } from "react-router-dom";
// import Layout from "../dashboard/layout";
// import Login from "../admin/auth/login";
// import Main from "../admin/components/main";

// export default function AppRouter() {
//   return (
//     <Routes>
//       {/* Everything under the dashboard layout */}
//       <Route path="/dashboard/*" element={<Layout />} />
//       <Route path="/admin/*" element={<Login />} />
//       <Route path="/panel/*" element={<Main />} />
//     </Routes>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Layout from "../dashboard/layout";
import Login from "../admin/auth/login";
import Main from "../admin/components/main";

export default function AppRouter() {
  return (
    <Routes>
      {/* Dashboard routes */}
      <Route path="/dashboard/*" element={<Layout />} />

      {/* Admin routes */}
      <Route path="/admin/*" element={<Login />} />

      {/* Panel routes */}
      <Route path="/panel/*" element={<Main />} />
    </Routes>
  );
}
