import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useToken } from "../../hooks/useToken";

const Header = () => {
  const { user, logout } = useToken();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 px-6 py-1.5 box-border ${
      isScrolled ? "glass-nav shadow-md" : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between w-full relative">
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
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm font-medium">
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
          {/* User Session Info (Desktop) */}
          {user && user.username && (
            <div className="hidden md:flex items-center gap-2.5">
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
          
          {/* Desktop Logout Button */}
          <button
            onClick={logout}
            className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-semibold my-4 py-2 px-4 rounded transition-colors text-xs md:text-sm cursor-pointer shadow-md border-0"
          >
            Logout
          </button>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden text-zinc-400 hover:text-white p-1.5 focus:outline-none transition-colors cursor-pointer bg-transparent border-0"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden w-full absolute top-[100%] left-0 right-0 bg-[#0c0c0e]/95 backdrop-blur-xl border-b border-zinc-900/80 px-6 py-5 flex flex-col gap-5 box-border z-40 text-left">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-brand-rose font-semibold py-1.5 block border-b border-zinc-800/40"
                  : "text-zinc-400 hover:text-zinc-200 py-1.5 block border-b border-zinc-800/40"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/movie-page"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-brand-rose font-semibold py-1.5 block border-b border-zinc-800/40"
                  : "text-zinc-400 hover:text-zinc-200 py-1.5 block border-b border-zinc-800/40"
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/todo"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-brand-rose font-semibold py-1.5 block border-b border-zinc-800/40"
                  : "text-zinc-400 hover:text-zinc-200 py-1.5 block border-b border-zinc-800/40"
              }
            >
              Todo
            </NavLink>
            <NavLink
              to="/cv-page"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-brand-rose font-semibold py-1.5 block border-b border-zinc-800/40"
                  : "text-zinc-400 hover:text-zinc-200 py-1.5 block border-b border-zinc-800/40"
              }
            >
              CV
            </NavLink>
          </nav>

          {/* User Session Info (Mobile) */}
          {user && user.username && (
            <div className="flex items-center gap-3 border-t border-zinc-900/40 pt-4">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.username}
                  className="w-8 h-8 rounded-full border border-zinc-800 object-cover bg-zinc-950 shadow-inner"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs text-white font-bold">
                  {user.username.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Logged in as</span>
                <span className="text-white font-semibold text-xs">{user.username}</span>
              </div>
            </div>
          )}

          {/* Mobile Logout Button */}
          <button
            onClick={() => {
              setIsOpen(false);
              logout();
            }}
            className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded transition-colors text-xs cursor-pointer border-0 shadow-md"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
