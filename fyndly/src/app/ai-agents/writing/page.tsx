import React from 'react';
import MainLayout from '../../components/layout/MainLayout';

export default function WritingAgentPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Writing Agent</h1>
        <p className="text-gray-600 dark:text-gray-300">Your AI-powered writing assistant for creating and refining content.</p>
      </div>
    </MainLayout>
  );
} 