import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';

export default function AIAgentsPage() {
  const agents = [
    {
      title: 'Research Agent',
      description: 'AI-powered research assistant for discovering and analyzing information',
      icon: '🔬',
      href: '/ai-agents/research',
      status: 'Available',
    },
    {
      title: 'Writing Agent',
      description: 'Intelligent writing assistant for content creation and refinement',
      icon: '✒️',
      href: '/ai-agents/writing',
      status: 'Available',
    },
    {
      title: 'Workflow Agent',
      description: 'Smart automation for your research and content processes',
      icon: '⚡',
      href: '/ai-agents/workflow',
      status: 'Available',
    },
  ];

  return (
    <MainLayout>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-200">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AI Agents</h1>
          <p className="text-gray-600 dark:text-gray-300">Your intelligent assistants for research and content creation.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Link
              key={agent.title}
              href={agent.href}
              className="block border dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{agent.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{agent.title}</h2>
                    <span className="inline-block px-2 py-1 text-xs font-medium text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900 rounded-full">
                      {agent.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{agent.description}</p>
              </div>
              <div className="px-6 py-3 bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-700">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Launch Agent →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
} 