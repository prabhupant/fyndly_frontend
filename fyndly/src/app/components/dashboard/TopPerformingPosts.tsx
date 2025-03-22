import React from 'react';
import { ArrowPathIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { XLogo, LinkedInLogo } from '../Icons';

interface Post {
  id: string;
  platform: 'linkedin' | 'twitter';
  title: string;
  thumbnail?: string;
  metrics: {
    likes: number;
    shares: number;
    comments: number;
  };
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export default function TopPerformingPosts() {
  const posts: Post[] = [
    {
      id: '1',
      platform: 'linkedin',
      title: 'The Future of AI in Content Creation: 5 Predictions for 2024',
      thumbnail: 'https://picsum.photos/200/200',
      metrics: {
        likes: 1200,
        shares: 450,
        comments: 89,
      },
    },
    {
      id: '2',
      platform: 'twitter',
      title: '🚀 Breaking down the latest trends in AI and Machine Learning',
      metrics: {
        likes: 2500,
        shares: 1200,
        comments: 180,
      },
    },
    {
      id: '3',
      platform: 'linkedin',
      title: 'How We Increased Engagement by 300% Using AI-Driven Content Strategy',
      thumbnail: 'https://picsum.photos/200/200',
      metrics: {
        likes: 890,
        shares: 230,
        comments: 45,
      },
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Top Performing Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="flex items-start space-x-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt=""
                className="w-16 h-16 object-cover rounded-lg"
              />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                {post.platform === 'linkedin' ? (
                  <LinkedInLogo className="w-5 h-5 text-[#0A66C2]" />
                ) : (
                  <XLogo className="w-5 h-5" />
                )}
                <span className="text-sm text-gray-500">
                  {post.platform === 'linkedin' ? 'LinkedIn' : 'X (Twitter)'}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-900 truncate">
                {post.title}
              </p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <span>{formatNumber(post.metrics.likes)} likes</span>
                <span>{formatNumber(post.metrics.shares)} shares</span>
                <span>{formatNumber(post.metrics.comments)} comments</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                <ArrowPathIcon className="w-4 h-4 mr-1" />
                Repurpose
              </button>
              <button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700">
                <RocketLaunchIcon className="w-4 h-4 mr-1" />
                Boost
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 