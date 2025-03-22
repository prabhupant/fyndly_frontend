import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DemographicData {
  category: string;
  percentage: number;
}

interface ActivityData {
  day: string;
  activity: number;
}

export default function AudienceInsights() {
  // Mock data
  const demographics = {
    location: [
      { category: 'United States', percentage: 45 },
      { category: 'India', percentage: 20 },
      { category: 'United Kingdom', percentage: 15 },
      { category: 'Canada', percentage: 10 },
      { category: 'Others', percentage: 10 },
    ],
    industry: [
      { category: 'Technology', percentage: 35 },
      { category: 'Marketing', percentage: 25 },
      { category: 'Business', percentage: 20 },
      { category: 'Education', percentage: 15 },
      { category: 'Others', percentage: 5 },
    ],
    role: [
      { category: 'Manager', percentage: 30 },
      { category: 'Developer', percentage: 25 },
      { category: 'Founder', percentage: 20 },
      { category: 'Designer', percentage: 15 },
      { category: 'Others', percentage: 10 },
    ],
  };

  const activityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Audience Activity',
        data: [65, 85, 75, 90, 82, 60, 55],
        fill: true,
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const activityOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(156, 163, 175, 0.1)',
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgb(107, 114, 128)',
        },
      },
    },
  };

  const renderDemographicSection = (title: string, data: DemographicData[]) => (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      {data.map((item) => (
        <div key={item.category}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">{item.category}</span>
            <span className="text-gray-900 font-medium">{item.percentage}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full"
              style={{ width: `${item.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Audience Insights</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Demographics */}
        <div className="space-y-8">
          {renderDemographicSection('Location', demographics.location)}
          {renderDemographicSection('Industry', demographics.industry)}
          {renderDemographicSection('Role', demographics.role)}
        </div>

        {/* Activity Patterns */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Audience Activity</h3>
          <div className="h-[300px] mb-6">
            <Line data={activityData} options={activityOptions} />
          </div>
          
          {/* Best Time to Post */}
          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-green-800 mb-2">Best Time to Post</h4>
            <p className="text-sm text-green-700">
              Your audience is most active on Thursdays between 10 AM and 2 PM EST.
              Consider scheduling your important content during these peak hours.
            </p>
          </div>
        </div>
      </div>

      {/* Content Type Performance */}
      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Content Type Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { type: 'Image Posts', engagement: '+45%' },
            { type: 'Text Posts', engagement: '+28%' },
            { type: 'Polls', engagement: '+62%' },
            { type: 'Carousels', engagement: '+38%' },
          ].map((item) => (
            <div key={item.type} className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">{item.type}</p>
              <p className="text-lg font-semibold text-green-600">{item.engagement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 