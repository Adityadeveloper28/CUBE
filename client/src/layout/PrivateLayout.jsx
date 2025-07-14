import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const PrivateLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: '📊'
    },
    {
      name: 'Cube',
      path: '/dashboard/cube',
      icon: '🎲',
      subItems: [
        { name: 'Cube Management', path: '/dashboard/cube/management' },
        { name: 'Cube Analytics', path: '/dashboard/cube/analytics' },
        { name: 'Cube Settings', path: '/dashboard/cube/settings' }
      ]
    },
    {
        name: 'Cuboid',
        path: '/dashboard/cuboid',
        icon: '📦',
    },
    {
      name: 'Reports',
      path: '/dashboard/reports',
      icon: '📈'
    },
    {
      name: 'Settings',
      path: '/dashboard/settings',
      icon: '⚙️'
    }
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
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
        <header className="lg:hidden bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              ☰
            </button>
            <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
            <div></div>
          </div>
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
