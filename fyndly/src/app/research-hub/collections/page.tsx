import React from 'react';
import MainLayout from '../../components/layout/MainLayout';

export default function CollectionsPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Collections</h1>
        <p className="text-gray-600 dark:text-gray-300">Manage and organize your research collections here.</p>
      </div>
    </MainLayout>
  );
} 