import Header from "../header";
import { Outlet } from "react-router";
import Footer from "../footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#141414] text-zinc-100">
      <Header />
      <main className="w-full flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
