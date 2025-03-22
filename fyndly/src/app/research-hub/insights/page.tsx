import React from 'react';
import MainLayout from '../../components/layout/MainLayout';

export default function InsightsPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Saved Insights</h1>
        <p className="text-gray-600 dark:text-gray-300">Access and manage your saved research insights.</p>
      </div>
    </MainLayout>
  );
} 