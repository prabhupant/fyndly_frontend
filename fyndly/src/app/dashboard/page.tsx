'use client';

import MainLayout from '../components/layout/MainLayout';

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Welcome to your dashboard!</p>
      </div>
    </MainLayout>
  );
} 