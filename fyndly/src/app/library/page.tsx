import React from 'react';

export default function LibraryPage() {
  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'documents', label: 'Documents' },
    { id: 'references', label: 'References' },
    { id: 'media', label: 'Media' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Library</h1>
          <p className="text-gray-600">Access your saved resources, documents, and references.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
          <span className="mr-2">+</span>
          Add Resource
        </button>
      </div>

      <div className="mb-8">
        <div className="flex items-center space-x-6 border-b border-gray-200 pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`pb-4 -mb-4 font-medium transition-colors duration-200 ${
                category.id === 'all'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">📚</span>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No resources yet</h3>
        <p className="text-gray-600 mb-6">Start building your library by adding resources</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
          <span className="mr-2">+</span>
          Add Your First Resource
        </button>
      </div>
    </div>
  );
} 