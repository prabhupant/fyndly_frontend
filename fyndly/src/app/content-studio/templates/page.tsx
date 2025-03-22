import React from 'react';

export default function TemplatesPage() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Content Templates</h1>
      <p className="text-gray-600">Create and manage reusable content templates to streamline your writing process.</p>
      
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Template Card - Create New */}
        <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 transition-colors duration-200">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl text-blue-600">+</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Create New Template</h2>
          <p className="text-sm text-gray-600 mt-2">Start with a blank template</p>
        </div>

        {/* Sample Template Card */}
        <div className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Blog Post</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">Default</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Standard blog post structure with introduction, body, and conclusion sections.</p>
          <div className="mt-4 flex justify-end">
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
              Use Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 