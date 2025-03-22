import React from 'react';
import { PlusIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface Topic {
  id: string;
  title: string;
  trend: 'up' | 'down' | 'stable';
  category: string;
  relevanceScore: number;
}

export default function TrendingTopics() {
  const topics: Topic[] = [
    {
      id: '1',
      title: 'AI-Powered Content Generation',
      trend: 'up',
      category: 'Technology',
      relevanceScore: 98,
    },
    {
      id: '2',
      title: 'Remote Work Culture',
      trend: 'stable',
      category: 'Workplace',
      relevanceScore: 85,
    },
    {
      id: '3',
      title: 'Sustainable Tech Practices',
      trend: 'up',
      category: 'Sustainability',
      relevanceScore: 92,
    },
    {
      id: '4',
      title: 'Digital Privacy Concerns',
      trend: 'up',
      category: 'Security',
      relevanceScore: 95,
    },
    {
      id: '5',
      title: 'Future of Social Media',
      trend: 'stable',
      category: 'Social Media',
      relevanceScore: 88,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Trending Topics</h2>
        <span className="text-sm text-gray-500">From Research Agent</span>
      </div>
      <div className="space-y-3">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50"
          >
            <div className="flex-1 min-w-0 mr-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900 truncate">
                  {topic.title}
                </span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    topic.trend === 'up'
                      ? 'bg-green-100 text-green-800'
                      : topic.trend === 'down'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {topic.category}
                </span>
              </div>
              <div className="flex items-center mt-1">
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${topic.relevanceScore}%` }}
                  />
                </div>
                <span className="ml-2 text-xs text-gray-500">
                  {topic.relevanceScore}% relevant
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                <PlusIcon className="w-4 h-4 mr-1" />
                Queue
              </button>
              <button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700">
                <SparklesIcon className="w-4 h-4 mr-1" />
                Generate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 