import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components";
const UserLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
