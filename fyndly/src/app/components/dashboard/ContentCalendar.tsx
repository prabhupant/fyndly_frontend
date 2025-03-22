import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { XLogo, LinkedInLogo } from '../Icons';

interface CalendarPost {
  id: string;
  title: string;
  platform: 'linkedin' | 'twitter';
  status: 'draft' | 'scheduled' | 'published';
  time: string;
}

const getDayName = (date: Date): string => {
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};

const getDate = (date: Date): string => {
  return date.getDate().toString();
};

export default function ContentCalendar() {
  // Generate dates for the current week
  const today = new Date();
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - today.getDay() + i);
    return date;
  });

  const posts: { [key: string]: CalendarPost[] } = {
    'Mon': [
      {
        id: '1',
        title: 'AI Weekly Update',
        platform: 'linkedin',
        status: 'published',
        time: '10:00 AM',
      },
    ],
    'Tue': [
      {
        id: '2',
        title: 'Tech Trends Thread',
        platform: 'twitter',
        status: 'scheduled',
        time: '2:00 PM',
      },
    ],
    'Wed': [
      {
        id: '3',
        title: 'Industry Insights',
        platform: 'linkedin',
        status: 'draft',
        time: '11:30 AM',
      },
    ],
    'Thu': [
      {
        id: '4',
        title: 'Product Launch',
        platform: 'twitter',
        status: 'scheduled',
        time: '3:00 PM',
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">Content Calendar</h2>
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <ChevronLeftIcon className="w-5 h-5 text-gray-500" />
          </button>
          <span className="text-sm text-gray-500">This Week</span>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <ChevronRightIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {weekDates.map((date, i) => {
          const dayName = getDayName(date);
          const dayPosts = posts[dayName] || [];
          const isToday = date.toDateString() === today.toDateString();

          return (
            <div
              key={i}
              className={`border rounded-lg p-2 ${
                isToday ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
              }`}
            >
              <div className="text-center mb-2">
                <div className="text-xs text-gray-500">{dayName}</div>
                <div className={`text-sm font-medium ${
                  isToday ? 'text-indigo-600' : 'text-gray-900'
                }`}>
                  {getDate(date)}
                </div>
              </div>
              <div className="space-y-1">
                {dayPosts.map((post) => (
                  <div
                    key={post.id}
                    className={`p-1.5 rounded text-xs ${
                      post.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : post.status === 'scheduled'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center space-x-1">
                      {post.platform === 'linkedin' ? (
                        <LinkedInLogo className="w-3 h-3 text-[#0A66C2]" />
                      ) : (
                        <XLogo className="w-3 h-3" />
                      )}
                      <span className="truncate">{post.title}</span>
                    </div>
                    <div className="mt-0.5 text-[10px] opacity-75">{post.time}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-4 space-x-4">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
          <span className="text-xs text-gray-500">Published</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-xs text-gray-500">Scheduled</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div>
          <span className="text-xs text-gray-500">Draft</span>
        </div>
      </div>
    </div>
  );
} 