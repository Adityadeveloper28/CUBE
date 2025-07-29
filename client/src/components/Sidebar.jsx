import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

function Sidebar({ toggleSidebar, sidebarOpen, menuItems, location }) {
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-black border-r border-white shadow-2xl transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-white">
          <h1 className="text-xl font-bold text-white tracking-wider">
            CUBE PANEL
          </h1>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-gray-800 text-white border border-gray-600 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-8">
          <ul className="space-y-2 px-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-white rounded-lg border border-transparent hover:bg-gray-800 hover:border-blue-400 hover:text-blue-300 transition-all duration-200 ${
                    location.pathname === item.path
                      ? "bg-blue-600 border-blue-400 text-white"
                      : ""
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>

                {/* Sub-items for Cube */}
                {item.name === "Settings" && item.subItems && (
                  <ul className="ml-8 mt-2 space-y-1">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          className={`block px-4 py-2 text-sm text-gray-300 rounded-lg border border-transparent hover:bg-gray-800 hover:border-gray-600 hover:text-white transition-all duration-200 ${
                            location.pathname === subItem.path
                              ? "bg-gray-700 border-gray-500 text-white"
                              : ""
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-75 lg:hidden border border-white"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
