import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import {
  PlusIcon,
  ArrowPathIcon,
  PencilSquareIcon,
  ClockIcon,
  CheckIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';
import { XLogo, LinkedInLogo } from '../Icons';
import WritingStyleForm from './WritingStyleForm';

interface ContentDraft {
  id: string;
  platform: 'twitter' | 'linkedin' | 'blog';
  title: string;
  content: string;
  tags: string[];
  mediaRecommendations?: {
    type: 'image' | 'video';
    url: string;
  }[];
  tone: string;
  length: number;
  maxLength?: number;
}

interface WritingStylePreferences {
  tone: 'professional' | 'friendly' | 'sarcastic' | 'thought-leader';
  guidelines: {
    platform: string;
    rules: string[];
  }[];
  examples: string[];
  doRules: string[];
  dontRules: string[];
}

export default function WritingAgent() {
  const [selectedPlatform, setSelectedPlatform] = useState(0);
  const [showStyleModal, setShowStyleModal] = useState(false);
  const [writingPreferences, setWritingPreferences] = useState<WritingStylePreferences>({
    tone: 'professional',
    guidelines: [
      {
        platform: 'X (Twitter)',
        rules: ['Keep it concise', 'Use emojis sparingly', 'Include call-to-actions'],
      },
      {
        platform: 'LinkedIn',
        rules: ['Professional tone', 'Industry insights', 'Data-backed statements'],
      },
    ],
    examples: [],
    doRules: ['Use bullet points', 'Include statistics', 'End with questions'],
    dontRules: ['Use jargon', 'Write walls of text', 'Be overly promotional'],
  });

  const platforms = ['X (Twitter)', 'LinkedIn', 'Blog Posts'];

  const handleSavePreferences = (preferences: WritingStylePreferences) => {
    setWritingPreferences(preferences);
    setShowStyleModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Writing Agent</h1>
          <div className="flex space-x-4">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              <PlusIcon className="w-5 h-5 mr-2" />
              Create New Post
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <ArrowPathIcon className="w-5 h-5 mr-2" />
              Generate from Research
            </button>
            <button
              onClick={() => setShowStyleModal(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <PencilSquareIcon className="w-5 h-5 mr-2" />
              Edit Style Preferences
            </button>
          </div>
        </div>
      </div>

      {/* Content Drafts Tabs */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <Tab.Group selectedIndex={selectedPlatform} onChange={setSelectedPlatform}>
          <Tab.List className="flex space-x-4 border-b border-gray-200 mb-6">
            {platforms.map((platform) => (
              <Tab
                key={platform}
                className={({ selected }) =>
                  `px-4 py-2 text-sm font-medium border-b-2 ${
                    selected
                      ? 'text-indigo-600 border-indigo-600'
                      : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                  }`
                }
              >
                <div className="flex items-center space-x-2">
                  {platform === 'X (Twitter)' && <XLogo className="w-4 h-4" />}
                  {platform === 'LinkedIn' && <LinkedInLogo className="w-4 h-4" />}
                  <span>{platform}</span>
                </div>
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {platforms.map((platform, idx) => (
              <Tab.Panel key={idx} className="space-y-6">
                {/* Generated Posts Preview */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        How AI is Transforming Content Creation
                      </h3>
                      <div className="flex items-center space-x-3 mt-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Thought Leadership
                        </span>
                        <span className="text-sm text-gray-500">
                          {platform === 'X (Twitter)' ? '240/280' : '350/3000'} characters
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        Schedule
                      </button>
                      <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        <CheckIcon className="w-4 h-4 mr-1" />
                        Approve
                      </button>
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <ArrowUpRightIcon className="w-4 h-4 mr-1" />
                        Export
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    🚀 Exciting times ahead in the content creation space!
                    
                    AI is revolutionizing how we create and distribute content. Here's how:

                    1️⃣ Automated research and insights
                    2️⃣ Personalized content at scale
                    3️⃣ Enhanced creativity and ideation
                    
                    What's your take on AI in content creation? 🤔
                    
                    #AIContent #DigitalMarketing #ContentStrategy
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['#AIContent', '#DigitalMarketing', '#ContentStrategy'].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* Featured Content Ideas */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Featured Content Ideas</h2>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((idea) => (
            <div
              key={idea}
              className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-indigo-600">Trending Topic</span>
                <button className="text-gray-400 hover:text-gray-600">
                  <PlusIcon className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                The Rise of AI in Content Creation
              </h3>
              <p className="text-sm text-gray-500">
                Based on recent discussions and market trends in AI technology.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Writing Style Modal */}
      {showStyleModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900">Writing Style Preferences</h2>
              <button
                onClick={() => setShowStyleModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <WritingStyleForm
              onSave={handleSavePreferences}
              initialPreferences={writingPreferences}
            />
          </div>
        </div>
      )}
    </div>
  );
} 