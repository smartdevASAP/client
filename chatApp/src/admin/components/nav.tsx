import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="flex justify-between p-2 items-center">
      <p className="font-bold text-2xl ">LOGO</p>
      <ul className="flex gap-12 items-center">
        <Link to="/panel">overview</Link>
        <Link to="/panel/users">users</Link>
        <Link to="/panel/statistics">stats</Link>
        <Link to="/panel/posts">posts</Link>
      </ul>
      <button className="bg-blue-700 text-white p-3 font-bold rounded-sm shadow-xs">
        <Link to="/panel/profile">Profile</Link>
      </button>
    </div>
  );
}

export default Nav;
