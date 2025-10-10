import Sidebar from "./sidebar";
function Layout() {
  return (
    <div className="flex gap-4">
      <Sidebar />
      {/* main component here */}
      <div></div>
    </div>
  );
}

export default Layout;
