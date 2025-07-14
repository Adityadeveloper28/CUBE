import React from 'react';

const CubeManagement = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">🎲 Cube Management</h1>
        <p className="text-gray-600 mb-6">
          Manage and configure your cube instances.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Active Cubes</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span className="text-gray-700">Sales Cube</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span className="text-gray-700">Marketing Cube</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded border">
                <span className="text-gray-700">Analytics Cube</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Create New Cube
              </button>
              <button className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">
                Import Cube
              </button>
              <button className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                Delete Selected
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CubeManagement;
