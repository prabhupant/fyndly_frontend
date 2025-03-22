'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  icon: string;
  subItems?: NavItem[];
}

const navigation: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: '🏠' },
  {
    label: 'Research Hub',
    href: '/research-hub',
    icon: '🔍',
    subItems: [
      { label: 'My Collections', href: '/research-hub/collections', icon: '📁' },
      { label: 'Saved Insights', href: '/research-hub/insights', icon: '💡' },
    ],
  },
  {
    label: 'Content Studio',
    href: '/content-studio',
    icon: '✍️',
    subItems: [
      { label: 'Drafts', href: '/content-studio/drafts', icon: '📝' },
      { label: 'Published', href: '/content-studio/published', icon: '📢' },
      { label: 'Templates', href: '/content-studio/templates', icon: '📋' },
    ],
  },
  {
    label: 'AI Agents',
    href: '/ai-agents',
    icon: '🤖',
    subItems: [
      { label: 'Research Agent', href: '/ai-agents/research', icon: '🔬' },
      { label: 'Writing Agent', href: '/ai-agents/writing', icon: '✒️' },
      { label: 'Workflow Agent', href: '/ai-agents/workflow', icon: '⚡' },
    ],
  },
  { label: 'Insights & Analytics', href: '/analytics', icon: '📈' },
  { label: 'Library', href: '/library', icon: '📚' },
  { label: 'Settings', href: '/settings', icon: '⚙️' },
];

export default function LeftPanel() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  const isParentActive = (item: NavItem) => 
    item.subItems?.some(subItem => pathname === subItem.href) || pathname === item.href;

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <h1 
          style={{ fontFamily: 'var(--font-dancing-script)' }} 
          className="text-5xl text-blue-600 font-bold tracking-wide"
        >
          fyndly
        </h1>
      </div>
      <nav className="mt-2 px-3">
        {navigation.map((item) => (
          <div key={item.href} className="mb-2">
            <Link
              href={item.href}
              className={`flex items-center px-3 py-2.5 text-sm rounded-lg font-medium transition-all duration-200 ${
                isParentActive(item)
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="text-xl mr-3">{item.icon}</span>
              <span className="font-inter tracking-wide">{item.label}</span>
            </Link>
            {item.subItems && (
              <div className="ml-7 mt-1 space-y-1 border-l border-gray-200 pl-3">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={`flex items-center px-3 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                      isActive(subItem.href)
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-lg mr-2.5">{subItem.icon}</span>
                    <span className="font-inter tracking-wide">{subItem.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
} 