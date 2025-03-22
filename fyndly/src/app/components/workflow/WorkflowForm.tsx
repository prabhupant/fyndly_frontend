import React, { useState } from 'react';
import { RadioGroup, Switch } from '@headlessui/react';
import { XLogo, LinkedInLogo } from '../Icons';

interface WorkflowFormProps {
  onSubmit: (workflow: any) => void;
  onCancel: () => void;
  initialData?: any;
}

const platforms = [
  { id: 'linkedin', name: 'LinkedIn', icon: LinkedInLogo },
  { id: 'twitter', name: 'Twitter (X)', icon: XLogo },
];

const contentSources = [
  { id: 'writing', name: 'Writing Agent Drafts' },
  { id: 'research', name: 'Research Agent Summaries' },
  { id: 'manual', name: 'Manually Added Content' },
];

const frequencies = [
  { id: 'daily', name: 'Daily' },
  { id: 'weekly', name: 'Weekly' },
  { id: 'custom', name: 'Custom Days' },
];

export default function WorkflowForm({ onSubmit, onCancel, initialData }: WorkflowFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    platforms: initialData?.platforms || [],
    contentSources: initialData?.contentSources || [],
    frequency: initialData?.frequency || 'daily',
    timeOfDay: initialData?.timeOfDay || '09:00',
    autoPost: initialData?.autoPost || false,
    requireReview: initialData?.requireReview || true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Workflow Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Workflow Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="e.g., LinkedIn Weekly Thought Leadership"
        />
      </div>

      {/* Content Sources */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Choose Content Source
        </label>
        <div className="space-y-2">
          {contentSources.map((source) => (
            <label key={source.id} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.contentSources.includes(source.id)}
                onChange={(e) => {
                  const sources = e.target.checked
                    ? [...formData.contentSources, source.id]
                    : formData.contentSources.filter((id: string) => id !== source.id);
                  setFormData({ ...formData, contentSources: sources });
                }}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">{source.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Target Platforms */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Target Platforms
        </label>
        <div className="grid grid-cols-2 gap-4">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className={`border rounded-lg p-4 cursor-pointer ${
                formData.platforms.includes(platform.id)
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => {
                const platforms = formData.platforms.includes(platform.id)
                  ? formData.platforms.filter((id: string) => id !== platform.id)
                  : [...formData.platforms, platform.id];
                setFormData({ ...formData, platforms });
              }}
            >
              <div className="flex items-center space-x-2">
                {platform.id === 'linkedin' ? (
                  <LinkedInLogo className="w-6 h-6 text-[#0A66C2]" />
                ) : (
                  <platform.icon className="w-6 h-6" />
                )}
                <span className={`font-medium ${
                  formData.platforms.includes(platform.id) ? 'text-indigo-900' : 'text-gray-900'
                }`}>
                  {platform.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Posting Rules */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-700">Define Posting Rules</h3>
        
        {/* Frequency */}
        <RadioGroup
          value={formData.frequency}
          onChange={(frequency) => setFormData({ ...formData, frequency })}
        >
          <RadioGroup.Label className="block text-sm font-medium text-gray-700 mb-2">
            Frequency
          </RadioGroup.Label>
          <div className="grid grid-cols-3 gap-3">
            {frequencies.map((frequency) => (
              <RadioGroup.Option
                key={frequency.id}
                value={frequency.id}
                className={({ checked }) =>
                  `border rounded-lg p-3 cursor-pointer ${
                    checked
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`
                }
              >
                {({ checked }) => (
                  <div className="flex items-center justify-between">
                    <span className={checked ? 'text-indigo-900' : 'text-gray-900'}>
                      {frequency.name}
                    </span>
                    {checked && (
                      <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                    )}
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>

        {/* Time of Day */}
        <div>
          <label htmlFor="timeOfDay" className="block text-sm font-medium text-gray-700 mb-2">
            Time of Day
          </label>
          <input
            type="time"
            id="timeOfDay"
            value={formData.timeOfDay}
            onChange={(e) => setFormData({ ...formData, timeOfDay: e.target.value })}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Posting Conditions */}
        <div className="space-y-4">
          <Switch.Group>
            <div className="flex items-center justify-between">
              <Switch.Label className="text-sm text-gray-700">
                Auto-post Approved Content
              </Switch.Label>
              <Switch
                checked={formData.autoPost}
                onChange={(autoPost) => setFormData({ ...formData, autoPost })}
                className={`${
                  formData.autoPost ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span
                  className={`${
                    formData.autoPost ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>
          </Switch.Group>

          <Switch.Group>
            <div className="flex items-center justify-between">
              <Switch.Label className="text-sm text-gray-700">
                Require Manual Review Before Posting
              </Switch.Label>
              <Switch
                checked={formData.requireReview}
                onChange={(requireReview) => setFormData({ ...formData, requireReview })}
                className={`${
                  formData.requireReview ? 'bg-indigo-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span
                  className={`${
                    formData.requireReview ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>
          </Switch.Group>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-3 pt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Workflow
        </button>
      </div>
    </form>
  );
} 