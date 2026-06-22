import { NavLink } from "react-router";
import { useToken } from "../../hooks/useToken";

const Header = () => {
  const { user, logout } = useToken();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#141414]/95 backdrop-blur-sm border-b border-zinc-900 px-4 md:px-8 py-4 flex items-center justify-between text-left box-border">
      <div className="flex items-center gap-6 md:gap-10">
        <NavLink to="/movie-page" className="text-red-600 font-extrabold text-xl md:text-2xl tracking-wider select-none hover:opacity-90">
          NETPLIKS
        </NavLink>
        <nav className="flex items-center gap-4 text-xs md:text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movie-page"
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200 transition-colors"
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/todo"
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200 transition-colors"
            }
          >
            Todo
          </NavLink>
          <NavLink
            to="/cv-page"
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200 transition-colors"
            }
          >
            CV
          </NavLink>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <span className="hidden sm:inline text-xs md:text-sm text-zinc-300">
            Hi, <strong className="text-white">{user.username || "User"}</strong>
          </span>
        )}
        <button
          onClick={logout}
          className="text-xs bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-3 rounded transition-colors cursor-pointer"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;