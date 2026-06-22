import { NavLink } from "react-router";
import { useToken } from "../../hooks/useToken";

const Header = () => {
  const { user, logout } = useToken();

  return (
    <header className="sticky top-0 z-50 w-full glass-nav px-6 py-1.5 box-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between w-full">
        <div className="flex items-center gap-8 md:gap-12">
          <NavLink
            to="/"
            className="text-white font-extrabold text-xl md:text-2xl tracking-wider select-none hover:opacity-90 flex items-center gap-1.5 group"
          >
            <span className="text-brand-rose group-hover:scale-110 transition-transform duration-300 animate-pulse">
              ★
            </span>
            <span className="bg-linear-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              NETPLIKS
            </span>
            <span className="text-brand-rose group-hover:scale-110 transition-transform duration-300 animate-pulse">
              ★
            </span>
          </NavLink>
          <nav className="flex items-center gap-6 text-xs md:text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative py-1.5 transition-colors duration-300 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Home</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-rose rounded-full shadow-[0_0_8px_#f43f5e]" />
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/movie-page"
              className={({ isActive }) =>
                `relative py-1.5 transition-colors duration-300 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Movies</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-rose rounded-full shadow-[0_0_8px_#f43f5e]" />
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                `relative py-1.5 transition-colors duration-300 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Todo</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-rose rounded-full shadow-[0_0_8px_#f43f5e]" />
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/cv-page"
              className={({ isActive }) =>
                `relative py-1.5 transition-colors duration-300 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>CV</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-rose rounded-full shadow-[0_0_8px_#f43f5e]" />
                  )}
                </>
              )}
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {user && user.username && (
            <div className="flex items-center gap-2.5">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.username}
                  className="w-6.5 h-6.5 rounded-full border border-zinc-800 object-cover bg-zinc-950 shadow-inner"
                />
              ) : (
                <div className="w-6.5 h-6.5 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] text-white font-bold">
                  {user.username.slice(0, 2).toUpperCase()}
                </div>
              )}
              <span className="hidden sm:inline text-xs md:text-sm text-zinc-300 font-medium">
                Hi,{" "}
                <strong className="text-white font-semibold">
                  {user.username}
                </strong>
              </span>
            </div>
          )}
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold my-4 py-2 px-4 rounded transition-colors text-xs md:text-sm cursor-pointer shadow-md border-0"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
