import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav />
      </div>
      <div className="min-h-[calc(100vh-116px)]">
        {/*other component dynamicly */}
        <Outlet />
      </div>
      {/*footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
