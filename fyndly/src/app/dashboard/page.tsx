'use client';

import React, { useState } from 'react';
import { XLogo, LinkedInLogo } from '../components/Icons';
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
import TopPerformingPosts from '../components/dashboard/TopPerformingPosts';
import TrendingTopics from '../components/dashboard/TrendingTopics';
import ContentCalendar from '../components/dashboard/ContentCalendar';
import AudienceMetrics from '../components/dashboard/AudienceMetrics';
import WorkflowStatus from '../components/dashboard/WorkflowStatus';
import AIRecommendations from '../components/dashboard/AIRecommendations';

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
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Total Posts</h2>
            <div className="flex items-baseline">
              <p className="text-3xl font-bold text-gray-900">{mockData.totalPosts}</p>
              <span className="ml-2 text-sm text-gray-500">posts</span>
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <div className="flex items-center space-x-2">
                <XLogo className="w-4 h-4" />
                <span className="text-gray-600">{mockData.platformStats.X.posts}</span>
              </div>
              <div className="flex items-center space-x-2">
                <LinkedInLogo className="w-4 h-4 text-[#0A66C2]" />
                <span className="text-gray-600">{mockData.platformStats.LinkedIn.posts}</span>
              </div>
            </div>
          </div>

          {/* X Trend Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-2 mb-2">
              <XLogo className="w-5 h-5" />
              <h2 className="text-lg font-semibold text-gray-900">Trend</h2>
            </div>
            <div className="flex items-center">
              <p className="text-3xl font-bold text-gray-900">{Math.abs(mockData.platformStats.X.trend)}%</p>
              {mockData.platformStats.X.trend > 0 ? (
                <ArrowUpIcon className="w-5 h-5 ml-2 text-green-500" />
              ) : (
                <ArrowDownIcon className="w-5 h-5 ml-2 text-red-500" />
              )}
            </div>
            <p className="mt-2 text-sm text-gray-600">
              {mockData.platformStats.X.trend > 0 ? 'Increase' : 'Decrease'} from last month
            </p>
          </div>

          {/* LinkedIn Trend Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-2 mb-2">
              <LinkedInLogo className="w-5 h-5 text-[#0A66C2]" />
              <h2 className="text-lg font-semibold text-gray-900">Trend</h2>
            </div>
            <div className="flex items-center">
              <p className="text-3xl font-bold text-gray-900">{Math.abs(mockData.platformStats.LinkedIn.trend)}%</p>
              {mockData.platformStats.LinkedIn.trend > 0 ? (
                <ArrowUpIcon className="w-5 h-5 ml-2 text-green-500" />
              ) : (
                <ArrowDownIcon className="w-5 h-5 ml-2 text-red-500" />
              )}
            </div>
            <p className="mt-2 text-sm text-gray-600">
              {mockData.platformStats.LinkedIn.trend > 0 ? 'Increase' : 'Decrease'} from last month
            </p>
          </div>
        </div>

        {/* Engagement Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Engagement Trends</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedSource('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedSource === 'all'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedSource('X')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                  selectedSource === 'X'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <XLogo className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedSource('LinkedIn')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                  selectedSource === 'LinkedIn'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <LinkedInLogo className="w-4 h-4 text-[#0A66C2]" />
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
                      color: 'rgb(107, 114, 128)',
                    }
                  },
                  x: {
                    grid: {
                      color: 'rgba(156, 163, 175, 0.1)',
                    },
                    ticks: {
                      color: 'rgb(107, 114, 128)',
                    }
                  }
                },
                plugins: {
                  legend: {
                    labels: {
                      color: 'rgb(107, 114, 128)',
                      usePointStyle: true,
                      generateLabels: (chart) => {
                        const datasets = chart.data.datasets;
                        return datasets.map((dataset, i) => ({
                          text: dataset.label?.includes('X') ? '' : '',
                          fillStyle: dataset.backgroundColor as string,
                          strokeStyle: dataset.borderColor as string,
                          lineWidth: 2,
                          hidden: !chart.isDatasetVisible(i),
                          index: i,
                          pointStyle: (ctx) => {
                            return dataset.label?.includes('X') 
                              ? new XLogo({ className: 'w-4 h-4' }).type
                              : new LinkedInLogo({ className: 'w-4 h-4' }).type;
                          }
                        }));
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* New Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <TopPerformingPosts />
          </div>
          <div className="col-span-1">
            <AudienceMetrics />
          </div>
          <div className="col-span-1">
            <TrendingTopics />
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <ContentCalendar />
          </div>
          <div className="col-span-1">
            <WorkflowStatus />
          </div>
          
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <AIRecommendations />
          </div>
        </div>
      </div>
    </div>
  );
} 