import React from 'react';
import MainLayout from '../../components/layout/MainLayout';

export default function PublishedPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Published Content</h1>
        <p className="text-gray-600 dark:text-gray-300">View and manage your published content pieces and track their performance.</p>
        
        <div className="mt-8 grid gap-6">
          {/* Placeholder for published content list */}
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">No published content yet</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Your published content will appear here</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Create New
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 