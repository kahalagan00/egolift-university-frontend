import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";

const AppLayout: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
