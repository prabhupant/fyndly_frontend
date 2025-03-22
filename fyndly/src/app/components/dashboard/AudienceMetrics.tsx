import React from 'react';
import { XLogo, LinkedInLogo } from '../Icons';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

interface PlatformMetrics {
  platform: 'linkedin' | 'twitter';
  followers: number;
  growth: number;
  engagement: number;
  demographics: {
    label: string;
    percentage: number;
  }[];
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

export default function AudienceMetrics() {
  const metrics: PlatformMetrics[] = [
    {
      platform: 'linkedin',
      followers: 15800,
      growth: 12.5,
      engagement: 4.8,
      demographics: [
        { label: 'Tech', percentage: 45 },
        { label: 'Marketing', percentage: 30 },
        { label: 'Business', percentage: 25 },
      ],
    },
    {
      platform: 'twitter',
      followers: 22400,
      growth: 8.3,
      engagement: 3.2,
      demographics: [
        { label: 'Tech', percentage: 50 },
        { label: 'Marketing', percentage: 20 },
        { label: 'Business', percentage: 30 },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Audience Growth</h2>
      <div className="space-y-6">
        {metrics.map((platform) => (
          <div key={platform.platform} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                {platform.platform === 'linkedin' ? (
                  <LinkedInLogo className="w-6 h-6 text-[#0A66C2]" />
                ) : (
                  <XLogo className="w-6 h-6" />
                )}
                <span className="font-medium text-gray-900">
                  {platform.platform === 'linkedin' ? 'LinkedIn' : 'X (Twitter)'}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-green-600">
                <ArrowUpIcon className="w-4 h-4" />
                <span className="text-sm font-medium">{platform.growth}%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-500">Total Followers</div>
                <div className="text-xl font-semibold text-gray-900">
                  {formatNumber(platform.followers)}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Engagement Rate</div>
                <div className="text-xl font-semibold text-gray-900">
                  {platform.engagement}%
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-2">Audience Demographics</div>
              <div className="space-y-2">
                {platform.demographics.map((demo) => (
                  <div key={demo.label}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">{demo.label}</span>
                      <span className="text-gray-900 font-medium">{demo.percentage}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full"
                        style={{ width: `${demo.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 