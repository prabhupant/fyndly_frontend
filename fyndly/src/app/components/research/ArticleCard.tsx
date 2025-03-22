import React from 'react';
import { BookmarkIcon, ShareIcon, GlobeAltIcon, ClockIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';

interface ArticleCardProps {
  title: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  summary: string;
  keyTakeaways: string[];
  readingTime: number;
  isSaved?: boolean;
  onSave?: () => void;
  onShare?: () => void;
}

export default function ArticleCard({
  title,
  source,
  sourceUrl,
  publishedAt,
  summary,
  keyTakeaways,
  readingTime,
  isSaved = false,
  onSave,
  onShare,
}: ArticleCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <GlobeAltIcon className="w-5 h-5 text-gray-400 mr-2" />
          <div>
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-900 hover:text-indigo-600"
            >
              {source}
            </a>
            <div className="flex items-center text-sm text-gray-500">
              <span>{publishedAt}</span>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onSave}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            title={isSaved ? 'Remove from saved' : 'Save article'}
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
            title="Share article"
          >
            <ShareIcon className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Content */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-600 text-sm mb-6">{summary}</p>

      {/* Key Takeaways */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">AI-Curated Key Takeaways</h3>
        <ul className="space-y-2">
          {keyTakeaways.map((takeaway, index) => (
            <li key={index} className="flex items-start">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 mr-3">
                {index + 1}
              </span>
              <span className="text-sm text-gray-600">{takeaway}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          Read Full Article →
        </a>
        <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:border-gray-300">
          Add to Collection
        </button>
      </div>
    </div>
  );
} 