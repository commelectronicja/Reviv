import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Outlet />

      <nav className="fixed bottom-0 w-full bg-black flex justify-around p-3 text-white">
        <Link to="/">Home</Link>
        <Link to="/create">Post</Link>
      </nav>
    </div>
  );
}
