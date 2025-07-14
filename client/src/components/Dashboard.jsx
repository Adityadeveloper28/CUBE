const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome to your private dashboard</p>
        </header>
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Analytics</h3>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">1,234</div>
                <div className="text-sm text-gray-500">Total Users</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue</h3>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">$12,345</div>
                <div className="text-sm text-gray-500">This Month</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Projects</h3>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">56</div>
                <div className="text-sm text-gray-500">Active Projects</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance</h3>
              <div>
                <div className="text-3xl font-bold text-yellow-600 mb-1">98.5%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl">📊</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">New report generated</div>
                  <div className="text-sm text-gray-500">2 hours ago</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl">👤</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">User registered</div>
                  <div className="text-sm text-gray-500">4 hours ago</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl">🚀</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">Project deployed</div>
                  <div className="text-sm text-gray-500">1 day ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
