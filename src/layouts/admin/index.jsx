import { useState } from "react";
import { AdminNav } from "../../components";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/admin/sidebar";
const AdminLayout = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(true);
  return (
    <div className="h-screen flex font-poppins overflow-x-hidden">
      {/* sidebar */}
      <SideBar isSideBarOpen={isSideBarOpen} setSideBarOpen={setSideBarOpen} />
      <div className="w-full h-full  flex flex-col">
        <AdminNav
          isSideBarOpen={isSideBarOpen}
          setSideBarOpen={setSideBarOpen}
        />
        <div className="w-full h-full py-4 md:py-7   px-3 md:px-5 bg-gray-100 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
