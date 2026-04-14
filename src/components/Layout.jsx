import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="pb-16"> {/* prevents content hiding behind nav */}
      <Outlet />

      <nav className="fixed bottom-0 w-full bg-black flex justify-around p-3 text-white">
        <Link
          to="/"
          className={`${
            location.pathname === "/" ? "text-purple-400" : ""
          }`}
        >
          Home
        </Link>

        <Link
          to="/create"
          className={`${
            location.pathname === "/create" ? "
          ? "text-blue-500"
          : "text-gray-400"
          }'}
