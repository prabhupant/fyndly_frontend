import React from 'react';
import { XLogo, LinkedInLogo } from '../Icons';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PlatformStats {
  platform: 'linkedin' | 'twitter';
  engagements: number;
  followers: number;
  posts: number;
  growth: number;
}

export default function PlatformBreakdown() {
  const platformStats: PlatformStats[] = [
    {
      platform: 'linkedin',
      engagements: 3245,
      followers: 15800,
      posts: 67,
      growth: 12.5,
    },
    {
      platform: 'twitter',
      engagements: 2890,
      followers: 22400,
      posts: 89,
      growth: 8.3,
    },
  ];

  const chartData = {
    labels: ['Engagements', 'Followers', 'Posts'],
    datasets: platformStats.map((platform) => ({
      label: platform.platform === 'linkedin' ? 'LinkedIn' : 'X (Twitter)',
      data: [platform.engagements, platform.followers, platform.posts],
      backgroundColor: platform.platform === 'linkedin' 
        ? 'rgba(10, 102, 194, 0.8)'
        : 'rgba(29, 155, 240, 0.8)',
      borderColor: platform.platform === 'linkedin'
        ? 'rgb(10, 102, 194)'
        : 'rgb(29, 155, 240)',
      borderWidth: 1,
    })),
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(156, 163, 175, 0.1)',
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Platform Performance</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Cards */}
        <div className="space-y-4">
          {platformStats.map((platform) => (
            <div key={platform.platform} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-4">
                {platform.platform === 'linkedin' ? (
                  <LinkedInLogo className="w-6 h-6 text-[#0A66C2]" />
                ) : (
                  <XLogo className="w-6 h-6" />
                )}
                <h3 className="text-lg font-medium text-gray-900">
                  {platform.platform === 'linkedin' ? 'LinkedIn' : 'X (Twitter)'}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Engagements</p>
                  <p className="text-xl font-semibold text-gray-900">{platform.engagements}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Followers</p>
                  <p className="text-xl font-semibold text-gray-900">{platform.followers}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Posts</p>
                  <p className="text-xl font-semibold text-gray-900">{platform.posts}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Growth</p>
                  <p className="text-xl font-semibold text-green-600">+{platform.growth}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="h-[300px]">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Insights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-green-800 mb-2">Top Performer</h4>
          <p className="text-sm text-green-700">
            LinkedIn shows the highest engagement rate at 4.8%
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-blue-800 mb-2">Growth Opportunity</h4>
          <p className="text-sm text-blue-700">
            Increase posting frequency on X to match LinkedIn's engagement
          </p>
        </div>
      </div>
    </div>
  );
} 