import React, { useState } from 'react';

const CubeSettings = () => {
  const [settings, setSettings] = useState({
    autoRefresh: true,
    cacheEnabled: true,
    maxConcurrency: 5,
    refreshInterval: 300
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">⚙️ Cube Settings</h1>
        <p className="text-gray-600 mb-6">
          Configure global settings for your cube environment.
        </p>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 text-lg">General Settings</h3>
              
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Auto Refresh</label>
                <input
                  type="checkbox"
                  checked={settings.autoRefresh}
                  onChange={(e) => handleSettingChange('autoRefresh', e.target.checked)}
                  className="rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Cache Enabled</label>
                <input
                  type="checkbox"
                  checked={settings.cacheEnabled}
                  onChange={(e) => handleSettingChange('cacheEnabled', e.target.checked)}
                  className="rounded"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Max Concurrency</label>
                <input
                  type="number"
                  value={settings.maxConcurrency}
                  onChange={(e) => handleSettingChange('maxConcurrency', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="1"
                  max="20"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Refresh Interval (seconds)</label>
                <input
                  type="number"
                  value={settings.refreshInterval}
                  onChange={(e) => handleSettingChange('refreshInterval', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min="60"
                  max="3600"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 text-lg">Security Settings</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">API Access</h4>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors mb-2">
                  Generate API Key
                </button>
                <button className="w-full px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">
                  Revoke All Keys
                </button>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Access Control</h4>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors mb-2">
                  Manage Permissions
                </button>
                <button className="w-full px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors">
                  Audit Logs
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
            <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors">
              Reset
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CubeSettings;
