import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  BarChart3,
  Box,
  Package,
  TrendingUp,
  Settings,
  Menu,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

const PrivateLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Cube",
      path: "/dashboard/cube",
      icon: <Box size={20} />,
    },
    {
      name: "Cuboid",
      path: "/dashboard/cuboid",
      icon: <Package size={20} />,
    },

    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={20} />,
      subItems: [
        { name: "Cube Management", path: "/dashboard/cube/management" },
        { name: "Cube Analytics", path: "/dashboard/cube/analytics" },
        { name: "Cube Settings", path: "/dashboard/cube/settings" },
      ],
    },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-black flex ">
      {/* Sidebar */}
      <Sidebar
        toggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen}
        menuItems={menuItems}
        location={location}
      />

      {/* Main content */}
      <div className="flex-1 lg:ml-0">
        {/* Header with hamburger menu */}
        <header className="lg:hidden bg-black border-b border-white">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-800 text-white border border-gray-600 transition-colors"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-lg font-semibold text-white">Dashboard</h1>
            <div></div>
          </div>
        </header>

        <main className="p-6 bg-black overflow-y-auto max-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
