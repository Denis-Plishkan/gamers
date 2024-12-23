import { Header } from "@/components";
import { Outlet } from "react-router-dom";
import { Footer } from "@/components";
import './Layout.scss';

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
