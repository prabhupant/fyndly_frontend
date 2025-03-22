import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function LibraryPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Library</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">Access your saved resources, documents, and references.</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
            <span className="mr-2">+</span>
            Add Resource
          </button>
        </div>

        <div className="mb-8">
          <div className="flex items-center space-x-4 border-b dark:border-gray-700 pb-4">
            <button className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-4 -mb-4 font-medium">
              All Resources
            </button>
            <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              Documents
            </button>
            <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              References
            </button>
            <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              Media
            </button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Empty State Card */}
          <div className="col-span-full border dark:border-gray-700 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Your Library is Empty</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Start building your resource collection by adding documents, references, or media files.</p>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
              Learn how to get started →
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 