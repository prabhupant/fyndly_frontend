import React from 'react';
import { ClockIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { XLogo, LinkedInLogo } from '../Icons';

interface ScheduledPost {
  id: string;
  title: string;
  platform: 'linkedin' | 'twitter';
  scheduledTime: string;
  status: 'pending' | 'approved' | 'needs_review';
}

interface PendingAction {
  id: string;
  type: 'approval' | 'review' | 'edit';
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

export default function WorkflowStatus() {
  const scheduledPosts: ScheduledPost[] = [
    {
      id: '1',
      title: 'Latest AI Trends in Content Creation',
      platform: 'linkedin',
      scheduledTime: '2024-03-20T10:00:00Z',
      status: 'approved',
    },
    {
      id: '2',
      title: 'How to Optimize Your Social Media Strategy',
      platform: 'twitter',
      scheduledTime: '2024-03-21T14:30:00Z',
      status: 'needs_review',
    },
    {
      id: '3',
      title: 'The Future of Digital Marketing',
      platform: 'linkedin',
      scheduledTime: '2024-03-22T09:00:00Z',
      status: 'pending',
    },
  ];

  const pendingActions: PendingAction[] = [
    {
      id: '1',
      type: 'approval',
      description: 'Review and approve content for next week',
      dueDate: '2024-03-19T23:59:59Z',
      priority: 'high',
    },
    {
      id: '2',
      type: 'edit',
      description: 'Update hashtags for trending topics',
      dueDate: '2024-03-20T12:00:00Z',
      priority: 'medium',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  };

  const getStatusIcon = (status: ScheduledPost['status']) => {
    switch (status) {
      case 'approved':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'needs_review':
        return <ExclamationCircleIcon className="w-5 h-5 text-yellow-500" />;
      default:
        return <ClockIcon className="w-5 h-5 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: PendingAction['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Workflow Status</h2>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Next Scheduled Posts</h3>
        <div className="space-y-3">
          {scheduledPosts.map((post) => (
            <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                {post.platform === 'linkedin' ? (
                  <LinkedInLogo className="w-5 h-5 text-[#0A66C2]" />
                ) : (
                  <XLogo className="w-5 h-5" />
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">{post.title}</p>
                  <p className="text-xs text-gray-500">{formatDate(post.scheduledTime)}</p>
                </div>
              </div>
              {getStatusIcon(post.status)}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Pending Actions</h3>
        <div className="space-y-3">
          {pendingActions.map((action) => (
            <div key={action.id} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{action.description}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(action.priority)}`}>
                  {action.priority}
                </span>
              </div>
              <p className="text-xs text-gray-500">Due: {formatDate(action.dueDate)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 