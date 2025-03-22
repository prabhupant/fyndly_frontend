import React from 'react';
import { LightBulbIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface Recommendation {
  id: string;
  type: 'timing' | 'content' | 'engagement';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  actionText: string;
}

export default function AIRecommendations() {
  const recommendations: Recommendation[] = [
    {
      id: '1',
      type: 'timing',
      title: 'Optimal Posting Time',
      description: 'Your audience is most active between 9 AM and 11 AM EST. Schedule your next post during this window for maximum reach.',
      impact: 'high',
      actionText: 'Adjust Schedule',
    },
    {
      id: '2',
      type: 'content',
      title: 'Content Gap Detected',
      description: 'Your audience shows high interest in AI tools, but recent content lacks this topic. Consider creating content about AI implementation.',
      impact: 'medium',
      actionText: 'Generate Ideas',
    },
    {
      id: '3',
      type: 'engagement',
      title: 'Trending Discussion',
      description: 'A conversation about remote work tools is gaining traction. Join the discussion to increase visibility.',
      impact: 'high',
      actionText: 'View Discussion',
    },
  ];

  const getIcon = (type: Recommendation['type']) => {
    switch (type) {
      case 'timing':
        return <ClockIcon className="w-6 h-6 text-purple-500" />;
      case 'content':
        return <LightBulbIcon className="w-6 h-6 text-yellow-500" />;
      case 'engagement':
        return <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-500" />;
    }
  };

  const getImpactStyle = (impact: Recommendation['impact']) => {
    switch (impact) {
      case 'high':
        return 'bg-red-50 text-red-700 border-red-100';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-100';
      case 'low':
        return 'bg-green-50 text-green-700 border-green-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">AI Recommendations</h2>
        <span className="text-xs text-gray-500">Updated 5 minutes ago</span>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">{getIcon(rec.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-900">{rec.title}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border ${getImpactStyle(
                      rec.impact
                    )}`}
                  >
                    {rec.impact} impact
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                <button
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200"
                >
                  {rec.actionText} →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 