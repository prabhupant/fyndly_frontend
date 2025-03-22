'use client';

import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Mock data - replace with actual API data
const mockData = {
  totalPosts: 156,
  platformStats: {
    X: {
      posts: 89,
      trend: 12.5,
      engagement: [150, 220, 180, 240, 300, 280, 350],
      impressions: [
        { likes: 120, reposts: 45, comments: 23 },
        { likes: 180, reposts: 60, comments: 35 },
        { likes: 150, reposts: 40, comments: 28 },
        { likes: 200, reposts: 75, comments: 42 },
        { likes: 250, reposts: 90, comments: 55 },
        { likes: 230, reposts: 85, comments: 48 },
        { likes: 300, reposts: 110, comments: 65 },
      ]
    },
    LinkedIn: {
      posts: 67,
      trend: -5.2,
      engagement: [200, 180, 220, 190, 210, 240, 230],
      impressions: [
        { likes: 180, reposts: 35, comments: 42 },
        { likes: 160, reposts: 30, comments: 38 },
        { likes: 190, reposts: 40, comments: 45 },
        { likes: 170, reposts: 32, comments: 40 },
        { likes: 185, reposts: 38, comments: 44 },
        { likes: 210, reposts: 45, comments: 50 },
        { likes: 200, reposts: 42, comments: 48 },
      ]
    }
  }
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function DashboardPage() {
  const [selectedSource, setSelectedSource] = useState<'all' | 'X' | 'LinkedIn'>('all');

  const getChartData = () => {
    if (selectedSource === 'all') {
      return {
        labels,
        datasets: [
          {
            label: 'X Engagement',
            data: mockData.platformStats.X.engagement,
            borderColor: 'rgb(29, 155, 240)',
            backgroundColor: 'rgba(29, 155, 240, 0.5)',
          },
          {
            label: 'LinkedIn Engagement',
            data: mockData.platformStats.LinkedIn.engagement,
            borderColor: 'rgb(10, 102, 194)',
            backgroundColor: 'rgba(10, 102, 194, 0.5)',
          },
        ],
      };
    }

    const platform = selectedSource === 'X' ? mockData.platformStats.X : mockData.platformStats.LinkedIn;
    return {
      labels,
      datasets: [
        {
          label: `${selectedSource} Engagement`,
          data: platform.engagement,
          borderColor: selectedSource === 'X' ? 'rgb(29, 155, 240)' : 'rgb(10, 102, 194)',
          backgroundColor: selectedSource === 'X' ? 'rgba(29, 155, 240, 0.5)' : 'rgba(10, 102, 194, 0.5)',
        },
      ],
    };
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Total Posts</h2>
            <div className="flex items-baseline">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{mockData.totalPosts}</p>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">posts</span>
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">X: {mockData.platformStats.X.posts}</span>
              <span className="text-gray-600 dark:text-gray-300">LinkedIn: {mockData.platformStats.LinkedIn.posts}</span>
            </div>
          </div>

          {/* X Trend Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">X Trend</h2>
            <div className="flex items-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{Math.abs(mockData.platformStats.X.trend)}%</p>
              {mockData.platformStats.X.trend > 0 ? (
                <ArrowUpIcon className="w-5 h-5 ml-2 text-green-500" />
              ) : (
                <ArrowDownIcon className="w-5 h-5 ml-2 text-red-500" />
              )}
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {mockData.platformStats.X.trend > 0 ? 'Increase' : 'Decrease'} from last month
            </p>
          </div>

          {/* LinkedIn Trend Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn Trend</h2>
            <div className="flex items-center">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{Math.abs(mockData.platformStats.LinkedIn.trend)}%</p>
              {mockData.platformStats.LinkedIn.trend > 0 ? (
                <ArrowUpIcon className="w-5 h-5 ml-2 text-green-500" />
              ) : (
                <ArrowDownIcon className="w-5 h-5 ml-2 text-red-500" />
              )}
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {mockData.platformStats.LinkedIn.trend > 0 ? 'Increase' : 'Decrease'} from last month
            </p>
          </div>
        </div>

        {/* Engagement Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Engagement Trends</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedSource('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedSource === 'all'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedSource('X')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedSource === 'X'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                X
              </button>
              <button
                onClick={() => setSelectedSource('LinkedIn')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedSource === 'LinkedIn'
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                LinkedIn
              </button>
            </div>
          </div>
          <div className="h-[400px]">
            <Line
              data={getChartData()}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                  mode: 'index' as const,
                  intersect: false,
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(156, 163, 175, 0.1)',
                    },
                    ticks: {
                      color: 'rgb(156, 163, 175)',
                    }
                  },
                  x: {
                    grid: {
                      color: 'rgba(156, 163, 175, 0.1)',
                    },
                    ticks: {
                      color: 'rgb(156, 163, 175)',
                    }
                  }
                },
                plugins: {
                  legend: {
                    labels: {
                      color: 'rgb(156, 163, 175)',
                    }
                  },
                  tooltip: {
                    callbacks: {
                      afterBody: (context) => {
                        const dataIndex = context[0].dataIndex;
                        const platform = selectedSource === 'all' 
                          ? context[0].dataset.label?.includes('X') ? 'X' : 'LinkedIn'
                          : selectedSource;
                        const impressions = mockData.platformStats[platform as 'X' | 'LinkedIn'].impressions[dataIndex];
                        return [
                          `Likes: ${impressions.likes}`,
                          `Reposts: ${impressions.reposts}`,
                          `Comments: ${impressions.comments}`
                        ];
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 