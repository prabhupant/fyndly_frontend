import React from 'react';
import {
  ArrowUpIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
  ShareIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';

interface RedditDiscussionCardProps {
  title: string;
  subreddit: string;
  author: string;
  timestamp: string;
  content: string;
  stats: {
    upvotes: number;
    comments: number;
  };
  topComments: {
    author: string;
    content: string;
    upvotes: number;
  }[];
  aiInsights: string[];
  isSaved?: boolean;
  onSave?: () => void;
  onShare?: () => void;
}

export default function RedditDiscussionCard({
  title,
  subreddit,
  author,
  timestamp,
  content,
  stats,
  topComments,
  aiInsights,
  isSaved = false,
  onSave,
  onShare,
}: RedditDiscussionCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span className="font-medium text-orange-600">r/{subreddit}</span>
            <span className="mx-2">•</span>
            <span>Posted by u/{author}</span>
            <span className="mx-2">•</span>
            <span>{timestamp}</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onSave}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            title={isSaved ? 'Remove from saved' : 'Save discussion'}
          >
            {isSaved ? (
              <BookmarkSolidIcon className="w-5 h-5 text-indigo-600" />
            ) : (
              <BookmarkIcon className="w-5 h-5 text-gray-400" />
            )}
          </button>
          <button
            onClick={onShare}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            title="Share discussion"
          >
            <ShareIcon className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-600 text-sm mb-4">{content}</p>

      {/* Stats */}
      <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
        <div className="flex items-center">
          <ArrowUpIcon className="w-4 h-4 mr-1" />
          <span>{stats.upvotes} upvotes</span>
        </div>
        <div className="flex items-center">
          <ChatBubbleLeftIcon className="w-4 h-4 mr-1" />
          <span>{stats.comments} comments</span>
        </div>
      </div>

      {/* Top Comments */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Top Comments</h3>
        <div className="space-y-4">
          {topComments.map((comment, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="font-medium">u/{comment.author}</span>
                <div className="flex items-center ml-3">
                  <ArrowUpIcon className="w-4 h-4 mr-1" />
                  <span>{comment.upvotes}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-indigo-50 rounded-lg p-4">
        <div className="flex items-center mb-3">
          <LightBulbIcon className="w-5 h-5 text-indigo-600 mr-2" />
          <h3 className="text-sm font-medium text-indigo-900">AI-Generated Insights</h3>
        </div>
        <ul className="space-y-2">
          {aiInsights.map((insight, index) => (
            <li key={index} className="flex items-start">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 mr-3">
                {index + 1}
              </span>
              <span className="text-sm text-indigo-900">{insight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end space-x-3">
        <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
          View Full Discussion
        </button>
        <button className="px-3 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
          Save Insights
        </button>
      </div>
    </div>
  );
} 