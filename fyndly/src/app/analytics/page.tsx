'use client';

import React from 'react';
import EngagementSummary from '../components/analytics/EngagementSummary';
import PlatformBreakdown from '../components/analytics/PlatformBreakdown';
import AudienceInsights from '../components/analytics/AudienceInsights';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function AnalyticsPage() {
  const handleExport = () => {
    // Implement export functionality
    console.log('Exporting data...');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Analytics & Insights</h1>
          <p className="text-gray-600 mt-1">Track your social media performance and audience engagement</p>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
          <span>Export Data</span>
        </button>
      </div>

      <div className="space-y-6">
        {/* Engagement Summary */}
        <EngagementSummary />

        {/* Platform Breakdown */}
        <PlatformBreakdown />

        {/* Audience Insights */}
        <AudienceInsights />
      </div>
    </div>
  );
} 