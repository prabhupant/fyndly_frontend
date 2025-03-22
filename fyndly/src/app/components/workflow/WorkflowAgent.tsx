import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import {
  PlusIcon,
  Cog6ToothIcon,
  PencilSquareIcon,
  PauseIcon,
  PlayIcon,
  TrashIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { XLogo, LinkedInLogo } from '../Icons';
import WorkflowForm from './WorkflowForm';

interface Workflow {
  id: string;
  name: string;
  platforms: string[];
  contentSource: string;
  schedule: string;
  status: 'active' | 'paused' | 'error';
  contentSources: string[];
  frequency: string;
  timeOfDay: string;
  autoPost: boolean;
  requireReview: boolean;
}

interface Platform {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  status: 'active' | 'disconnected';
}

export default function WorkflowAgent() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showIntegrationsModal, setShowIntegrationsModal] = useState(false);
  const [editingWorkflow, setEditingWorkflow] = useState<Workflow | null>(null);

  const platforms: Platform[] = [
    { id: 'linkedin', name: 'LinkedIn', icon: LinkedInLogo, status: 'active' },
    { id: 'twitter', name: 'Twitter (X)', icon: XLogo, status: 'active' },
  ];

  const [workflows, setWorkflows] = useState<Workflow[]>([
    {
      id: '1',
      name: 'LinkedIn Weekly Thought Leadership',
      platforms: ['linkedin'],
      contentSource: 'Writing Agent Drafts',
      schedule: 'Every Monday at 10 AM',
      status: 'active',
      contentSources: ['writing'],
      frequency: 'weekly',
      timeOfDay: '10:00',
      autoPost: false,
      requireReview: true,
    },
    {
      id: '2',
      name: 'Daily X Updates',
      platforms: ['twitter'],
      contentSource: 'Research Agent Summaries',
      schedule: 'Daily at 9 AM, 2 PM, 5 PM',
      status: 'paused',
      contentSources: ['research'],
      frequency: 'daily',
      timeOfDay: '09:00',
      autoPost: true,
      requireReview: false,
    },
  ]);

  const handleCreateWorkflow = (workflow: any) => {
    const newWorkflow = {
      ...workflow,
      id: (workflows.length + 1).toString(),
      status: 'active',
      schedule: getScheduleText(workflow.frequency, workflow.timeOfDay),
      contentSource: getContentSourceText(workflow.contentSources),
    };
    setWorkflows([...workflows, newWorkflow]);
    setShowCreateModal(false);
  };

  const handleEditWorkflow = (workflow: any) => {
    const updatedWorkflow = {
      ...workflow,
      schedule: getScheduleText(workflow.frequency, workflow.timeOfDay),
      contentSource: getContentSourceText(workflow.contentSources),
    };
    setWorkflows(workflows.map(w => w.id === updatedWorkflow.id ? updatedWorkflow : w));
    setEditingWorkflow(null);
  };

  const getScheduleText = (frequency: string, timeOfDay: string) => {
    const time = new Date(`2000-01-01T${timeOfDay}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });
    switch (frequency) {
      case 'daily':
        return `Daily at ${time}`;
      case 'weekly':
        return `Every Monday at ${time}`;
      case 'custom':
        return `Custom schedule at ${time}`;
      default:
        return `${frequency} at ${time}`;
    }
  };

  const getContentSourceText = (sources: string[]) => {
    const sourceNames = sources.map(sourceId => {
      const source = contentSources.find(s => s.id === sourceId);
      return source ? source.name : sourceId;
    });
    return sourceNames.join(', ');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Workflow Agent</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Create New Workflow
            </button>
            <button
              onClick={() => setShowIntegrationsModal(true)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <Cog6ToothIcon className="w-5 h-5 mr-2" />
              Manage Integrations
            </button>
          </div>
        </div>
      </div>

      {/* Active Workflows */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Active Workflows</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {workflows.map((workflow) => (
            <div key={workflow.id} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{workflow.name}</h3>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      {workflow.platforms.includes('linkedin') && (
                        <LinkedInLogo className="w-5 h-5 text-[#0A66C2]" />
                      )}
                      {workflow.platforms.includes('twitter') && (
                        <XLogo className="w-5 h-5 ml-2" />
                      )}
                    </div>
                    <span>•</span>
                    <span>{workflow.contentSource}</span>
                    <span>•</span>
                    <span>{workflow.schedule}</span>
                  </div>
                  <div className="mt-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        workflow.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : workflow.status === 'paused'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {workflow.status.charAt(0).toUpperCase() + workflow.status.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setEditingWorkflow(workflow)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <PencilSquareIcon className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    {workflow.status === 'active' ? (
                      <PauseIcon className="w-5 h-5" />
                    ) : (
                      <PlayIcon className="w-5 h-5" />
                    )}
                  </button>
                  <button className="text-gray-400 hover:text-red-500">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500">
                    <DocumentMagnifyingGlassIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create/Edit Workflow Modal */}
      {(showCreateModal || editingWorkflow) && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900">
                {editingWorkflow ? 'Edit Workflow' : 'Create New Workflow'}
              </h2>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setEditingWorkflow(null);
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <WorkflowForm
              onSubmit={editingWorkflow ? handleEditWorkflow : handleCreateWorkflow}
              onCancel={() => {
                setShowCreateModal(false);
                setEditingWorkflow(null);
              }}
              initialData={editingWorkflow}
            />
          </div>
        </div>
      )}

      {/* Integrations Modal */}
      {showIntegrationsModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900">Platform Integrations</h2>
              <button
                onClick={() => setShowIntegrationsModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              {platforms.map((platform) => (
                <div
                  key={platform.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <platform.icon className="w-6 h-6" />
                    <span className="font-medium text-gray-900">{platform.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        platform.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {platform.status.charAt(0).toUpperCase() + platform.status.slice(1)}
                    </span>
                    <button className="text-sm text-indigo-600 hover:text-indigo-500">
                      {platform.status === 'active' ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                </div>
              ))}
              <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <PlusIcon className="w-5 h-5 mr-2" />
                Add New Platform
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 