import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';

export default function ResearchHubPage() {
  const sections = [
    {
      title: 'My Collections',
      description: 'Organize and manage your research materials',
      icon: '📁',
      href: '/research-hub/collections',
    },
    {
      title: 'Saved Insights',
      description: 'Access your saved research findings and insights',
      icon: '💡',
      href: '/research-hub/insights',
    },
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Research Hub</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">Your central workspace for research management and insights.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="block p-6 border dark:border-gray-700 rounded-lg hover:shadow-lg transition-all duration-200 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className="flex items-start">
                <span className="text-3xl mr-4">{section.icon}</span>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{section.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{section.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
} 