import React from 'react';
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
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">AI Agents</h1>
        <p className="text-gray-600">Your intelligent assistants for research and content creation.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <Link
            key={agent.title}
            href={agent.href}
            className="block border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 hover:border-blue-500"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{agent.icon}</span>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">{agent.title}</h2>
                  <span className="inline-block px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    {agent.status}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{agent.description}</p>
            </div>
            <div className="px-6 py-3 bg-gray-50 border-t">
              <span className="text-blue-600 text-sm font-medium">Launch Agent →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 