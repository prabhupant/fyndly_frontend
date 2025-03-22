import React from 'react';
import Link from 'next/link';

export default function ResearchHubPage() {
  const sections = [
    {
      title: 'My Collections',
      description: 'Organize and manage your research collections',
      icon: '📁',
      href: '/research-hub/collections',
    },
    {
      title: 'Saved Insights',
      description: 'Access your saved research insights and findings',
      icon: '💡',
      href: '/research-hub/insights',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Research Hub</h1>
          <p className="text-gray-600">Organize, analyze, and manage your research findings.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
          <span className="mr-2">+</span>
          New Research
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="block p-6 border rounded-lg hover:shadow-lg transition-all duration-200 hover:border-blue-500"
          >
            <div className="flex items-start">
              <span className="text-3xl mr-4">{section.icon}</span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{section.title}</h2>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 