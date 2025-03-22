import React, { useState } from 'react';
import { ChartBarIcon, UsersIcon, EyeIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

interface TimeRange {
  label: string;
  value: '7d' | '30d' | 'custom';
}

interface EngagementMetrics {
  likes: number;
  comments: number;
  shares: number;
  clicks: number;
  impressions: number;
  engagementRate: number;
}

export default function EngagementSummary() {
  const [selectedRange, setSelectedRange] = useState<TimeRange['value']>('7d');

  const timeRanges: TimeRange[] = [
    { label: 'Last 7 Days', value: '7d' },
    { label: 'Last 30 Days', value: '30d' },
    { label: 'Custom', value: 'custom' },
  ];

  // Mock data - replace with actual API data
  const metrics: EngagementMetrics = {
    likes: 2456,
    comments: 892,
    shares: 345,
    clicks: 1234,
    impressions: 45678,
    engagementRate: 10.8,
  };

  const metricCards = [
    {
      title: 'Total Engagements',
      value: metrics.likes + metrics.comments + metrics.shares,
      icon: ChartBarIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Total Impressions',
      value: metrics.impressions,
      icon: EyeIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Total Clicks',
      value: metrics.clicks,
      icon: UsersIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Engagement Rate',
      value: `${metrics.engagementRate}%`,
      icon: ArrowTrendingUpIcon,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Engagement Summary</h2>
        <div className="flex space-x-2">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setSelectedRange(range.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedRange === range.value
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((card) => (
          <div key={card.title} className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${card.bgColor} rounded-full p-3`}>
                <card.icon className={`w-6 h-6 ${card.color}`} />
              </div>
              <span className="text-sm text-gray-500">{selectedRange === '7d' ? '7d' : '30d'}</span>
            </div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">{card.title}</h3>
            <p className="text-2xl font-bold text-gray-900">
              {typeof card.value === 'number' ? formatNumber(card.value) : card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <ArrowTrendingUpIcon className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-blue-900">Performance Insight</h4>
            <p className="text-sm text-blue-700">
              Your engagement rate is 23% higher than the previous period. Keep up the great work!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 