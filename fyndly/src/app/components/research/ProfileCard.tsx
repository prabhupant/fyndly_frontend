import React from 'react';
import { XLogo, LinkedInLogo } from '../Icons';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { BookmarkIcon, ShareIcon } from '@heroicons/react/24/outline';

interface ProfileCardProps {
  name: string;
  handle: string;
  platform: 'twitter' | 'linkedin';
  avatar?: string;
  latestPost: {
    content: string;
    timestamp: string;
    engagement: {
      likes: number;
      comments: number;
      shares: number;
    };
  };
  onSave?: () => void;
  onShare?: () => void;
}

export default function ProfileCard({
  name,
  handle,
  platform,
  avatar,
  latestPost,
  onSave,
  onShare,
}: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {avatar ? (
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full mr-3" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
              <span className="text-lg font-medium text-gray-600">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h3 className="font-medium text-gray-900">{name}</h3>
            <div className="flex items-center text-gray-500 text-sm">
              {platform === 'twitter' ? (
                <XLogo className="w-4 h-4 mr-1" />
              ) : (
                <LinkedInLogo className="w-4 h-4 mr-1 text-[#0A66C2]" />
              )}
              <span>{handle}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <EllipsisHorizontalIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Latest Post */}
      <div className="mb-4">
        <p className="text-gray-600 text-sm line-clamp-3">{latestPost.content}</p>
        <span className="text-gray-400 text-xs">{latestPost.timestamp}</span>
      </div>

      {/* Engagement Stats */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <div className="flex items-center text-gray-500 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{latestPost.engagement.likes}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{latestPost.engagement.comments}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>{latestPost.engagement.shares}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onSave}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
          >
            <BookmarkIcon className="w-5 h-5" />
          </button>
          <button
            onClick={onShare}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
          >
            <ShareIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
} 