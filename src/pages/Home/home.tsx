import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import "./content.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="hero-container d-flex align-items-center justify-content-between">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
