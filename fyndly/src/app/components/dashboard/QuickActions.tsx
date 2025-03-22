import React from 'react';
import { PencilSquareIcon, CalendarIcon, HashtagIcon } from '@heroicons/react/24/outline';

export default function QuickActions() {
  const actions = [
    {
      id: 'write',
      label: 'Write Post',
      icon: PencilSquareIcon,
      color: 'bg-indigo-500 hover:bg-indigo-600',
    },
    {
      id: 'schedule',
      label: 'Schedule Post',
      icon: CalendarIcon,
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      id: 'topic',
      label: 'Add Topic',
      icon: HashtagIcon,
      color: 'bg-purple-500 hover:bg-purple-600',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            className={`${action.color} text-white rounded-lg p-4 flex items-center justify-center space-x-2 transition-colors duration-200`}
          >
            <action.icon className="w-5 h-5" />
            <span className="font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 