import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const AppLayout = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;