import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../assets/css/reset.css";
import "../index.css";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
