import React from 'react';

export default function SettingsPage() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

      {/* Profile Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Profile</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
            <div>
              <h3 className="text-gray-900 font-medium">User Name</h3>
              <p className="text-gray-600 text-sm">user@example.com</p>
            </div>
            <button className="ml-auto text-blue-600 hover:text-blue-700 text-sm">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="text-gray-900 font-medium">Language</h3>
              <p className="text-gray-600 text-sm">Select your preferred language</p>
            </div>
            <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="text-gray-900 font-medium">Notifications</h3>
              <p className="text-gray-600 text-sm">Manage notification preferences</p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              Configure
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="text-gray-900 font-medium">API Integration</h3>
              <p className="text-gray-600 text-sm">Manage API keys and integrations</p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              Manage Keys
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Danger Zone</h2>
        <div className="border-2 border-red-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-red-600 font-medium">Delete Account</h3>
              <p className="text-gray-600 text-sm">Permanently delete your account and all data</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 