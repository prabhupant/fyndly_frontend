import React from 'react';
import {
  UserGroupIcon,
  HashtagIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  NewspaperIcon,
  SparklesIcon,
  BookmarkIcon,
  PlusIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

interface SectionProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  actionLabel?: string;
}

const sections: SectionProps[] = [
  {
    title: 'People You Follow',
    icon: UserGroupIcon,
    description: 'Track insights from thought leaders and industry experts',
    actionLabel: 'Add Person',
  },
  {
    title: 'Topics You Track',
    icon: HashtagIcon,
    description: 'Monitor specific themes and interest areas',
    actionLabel: 'Add Topic',
  },
  {
    title: 'Websites & Blogs',
    icon: GlobeAltIcon,
    description: 'Aggregate content from trusted sources',
    actionLabel: 'Add Source',
  },
  {
    title: 'Communities',
    icon: ChatBubbleLeftRightIcon,
    description: 'Follow discussions from Reddit and other platforms',
    actionLabel: 'Add Community',
  },
  {
    title: 'News & Reports',
    icon: NewspaperIcon,
    description: 'Stay updated with latest industry news and reports',
    actionLabel: 'Add Feed',
  },
  {
    title: 'AI Trend Radar',
    icon: SparklesIcon,
    description: 'AI-discovered trending topics and insights',
    actionLabel: 'Configure',
  },
  {
    title: 'Saved Insights',
    icon: BookmarkIcon,
    description: 'Access your saved research and insights',
    actionLabel: 'View All',
  },
];

function EmptyState({ actionLabel }: { actionLabel: string }) {
  return (
    <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
      <div className="mx-auto w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
        <PlusIcon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-sm font-medium text-gray-900 mb-1">No items yet</h3>
      <p className="text-sm text-gray-500 mb-4">Get started by adding your first item</p>
      <button className="inline-flex items-center px-3 py-2 border border-indigo-600 text-sm font-medium rounded-lg text-indigo-600 hover:bg-indigo-50">
        {actionLabel}
      </button>
    </div>
  );
}

function TrendingItem() {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 mr-4">
        <ArrowTrendingUpIcon className="w-8 h-8 text-indigo-600" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">
          Rising trend in AI and Healthcare Integration
        </p>
        <p className="text-sm text-gray-500 truncate">
          +125% increase in discussions over the past week
        </p>
      </div>
      <div className="inline-flex items-center text-sm text-indigo-600">
        View Details →
      </div>
    </div>
  );
}

export default function ResearchAgentPage() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Research Agent</h1>
          <p className="text-gray-600">Your AI-powered research assistant for discovering and analyzing information.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <HashtagIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">24</p>
                <p className="text-sm text-gray-500">Active Topics</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <UserGroupIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">156</p>
                <p className="text-sm text-gray-500">Followed Sources</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <BookmarkIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">83</p>
                <p className="text-sm text-gray-500">Saved Insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-lg shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <section.icon className="w-6 h-6 text-indigo-600 mr-3" />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                      <p className="text-sm text-gray-500">{section.description}</p>
                    </div>
                  </div>
                  <button className="px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg">
                    {section.actionLabel}
                  </button>
                </div>

                {/* Section Content */}
                {section.title === 'AI Trend Radar' ? (
                  <div className="space-y-4">
                    <TrendingItem />
                    <TrendingItem />
                    <TrendingItem />
                  </div>
                ) : (
                  <EmptyState actionLabel={section.actionLabel || 'Add Item'} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 