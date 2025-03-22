import React from 'react';
import { HashtagIcon, ChartBarIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { ArrowTrendingUpIcon } from '@heroicons/react/20/solid';

interface TopicCardProps {
  title: string;
  description: string;
  trendingHashtags: string[];
  stats: {
    discussions: number;
    questions: number;
    trending: number;
  };
  relatedQuestions: string[];
}

export default function TopicCard({
  title,
  description,
  trendingHashtags,
  stats,
  relatedQuestions,
}: TopicCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">
            <ArrowTrendingUpIcon className="w-4 h-4 mr-1" />
            {stats.trending}% Trending
          </span>
        </div>
      </div>

      {/* Trending Hashtags */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Trending Hashtags</h4>
        <div className="flex flex-wrap gap-2">
          {trendingHashtags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm"
            >
              <HashtagIcon className="w-4 h-4 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <ChartBarIcon className="w-6 h-6 text-indigo-600 mx-auto mb-1" />
          <div className="text-lg font-semibold text-gray-900">{stats.discussions}</div>
          <div className="text-xs text-gray-500">Discussions</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <QuestionMarkCircleIcon className="w-6 h-6 text-indigo-600 mx-auto mb-1" />
          <div className="text-lg font-semibold text-gray-900">{stats.questions}</div>
          <div className="text-xs text-gray-500">Questions</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <ArrowTrendingUpIcon className="w-6 h-6 text-indigo-600 mx-auto mb-1" />
          <div className="text-lg font-semibold text-gray-900">{stats.trending}</div>
          <div className="text-xs text-gray-500">Trending</div>
        </div>
      </div>

      {/* Related Questions */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Popular Questions</h4>
        <div className="space-y-2">
          {relatedQuestions.map((question, index) => (
            <div
              key={index}
              className="flex items-start p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <QuestionMarkCircleIcon className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">{question}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end space-x-3">
        <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
          View Insights
        </button>
        <button className="px-3 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
          Follow Topic
        </button>
      </div>
    </div>
  );
} 