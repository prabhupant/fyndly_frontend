import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

interface WritingStyleFormProps {
  onSave: (preferences: WritingStylePreferences) => void;
  initialPreferences?: WritingStylePreferences;
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

const toneOptions = [
  { name: 'Professional', value: 'professional' },
  { name: 'Friendly', value: 'friendly' },
  { name: 'Sarcastic', value: 'sarcastic' },
  { name: 'Thought Leader', value: 'thought-leader' },
];

export default function WritingStyleForm({
  onSave,
  initialPreferences,
}: WritingStyleFormProps) {
  const [preferences, setPreferences] = useState<WritingStylePreferences>(
    initialPreferences || {
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
    }
  );

  const [newDoRule, setNewDoRule] = useState('');
  const [newDontRule, setNewDontRule] = useState('');
  const [newExample, setNewExample] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(preferences);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Tone Selection */}
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">
          Tone of Voice
        </label>
        <RadioGroup
          value={preferences.tone}
          onChange={(tone) => setPreferences({ ...preferences, tone })}
          className="grid grid-cols-2 gap-3"
        >
          {toneOptions.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option.value}
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
                    {option.name}
                  </span>
                  {checked && (
                    <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                  )}
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>

      {/* Platform Guidelines */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Platform Guidelines</h3>
        {preferences.guidelines.map((platform, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">{platform.platform}</h4>
            <ul className="space-y-2">
              {platform.rules.map((rule, ruleIndex) => (
                <li key={ruleIndex} className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Do Rules */}
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">Do Rules</label>
        <div className="space-y-2">
          {preferences.doRules.map((rule, index) => (
            <div key={index} className="flex items-center justify-between bg-green-50 p-2 rounded">
              <span className="text-sm text-green-700">{rule}</span>
              <button
                type="button"
                onClick={() =>
                  setPreferences({
                    ...preferences,
                    doRules: preferences.doRules.filter((_, i) => i !== index),
                  })
                }
                className="text-green-600 hover:text-green-700"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          ))}
          <div className="flex gap-2">
            <input
              type="text"
              value={newDoRule}
              onChange={(e) => setNewDoRule(e.target.value)}
              placeholder="Add a new do rule"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={() => {
                if (newDoRule) {
                  setPreferences({
                    ...preferences,
                    doRules: [...preferences.doRules, newDoRule],
                  });
                  setNewDoRule('');
                }
              }}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Don't Rules */}
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">Don't Rules</label>
        <div className="space-y-2">
          {preferences.dontRules.map((rule, index) => (
            <div key={index} className="flex items-center justify-between bg-red-50 p-2 rounded">
              <span className="text-sm text-red-700">{rule}</span>
              <button
                type="button"
                onClick={() =>
                  setPreferences({
                    ...preferences,
                    dontRules: preferences.dontRules.filter((_, i) => i !== index),
                  })
                }
                className="text-red-600 hover:text-red-700"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          ))}
          <div className="flex gap-2">
            <input
              type="text"
              value={newDontRule}
              onChange={(e) => setNewDontRule(e.target.value)}
              placeholder="Add a new don't rule"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={() => {
                if (newDontRule) {
                  setPreferences({
                    ...preferences,
                    dontRules: [...preferences.dontRules, newDontRule],
                  });
                  setNewDontRule('');
                }
              }}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Example Posts */}
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">
          Example Posts to Learn From
        </label>
        <div className="space-y-2">
          {preferences.examples.map((example, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
              <span className="text-sm text-gray-600">{example}</span>
              <button
                type="button"
                onClick={() =>
                  setPreferences({
                    ...preferences,
                    examples: preferences.examples.filter((_, i) => i !== index),
                  })
                }
                className="text-gray-400 hover:text-gray-600"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          ))}
          <div className="flex gap-2">
            <input
              type="text"
              value={newExample}
              onChange={(e) => setNewExample(e.target.value)}
              placeholder="Add a post URL or text"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={() => {
                if (newExample) {
                  setPreferences({
                    ...preferences,
                    examples: [...preferences.examples, newExample],
                  });
                  setNewExample('');
                }
              }}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Save Preferences
        </button>
      </div>
    </form>
  );
} 