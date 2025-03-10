import { Outlet } from "react-router";
import { Navbar } from "../Component/Navbar/Navbar";
import { Footer } from "../Component/Footer/Footer";

export const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};
