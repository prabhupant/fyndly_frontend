import React from 'react';

export default function CollectionsPage() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Research Collections</h1>
          <p className="text-gray-600">Organize and manage your research materials and findings.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
          New Collection
        </button>
      </div>

      <div className="mt-8 grid gap-6">
        {/* Placeholder for collections list */}
        <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">No collections yet</h2>
              <p className="text-sm text-gray-600 mt-1">Create your first research collection to get started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 