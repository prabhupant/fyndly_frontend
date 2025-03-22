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

  const isActive = (href: string) => pathname === href;
  const isParentActive = (item: NavItem) => 
    item.subItems?.some(subItem => pathname === subItem.href) || pathname === item.href;

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="p-6">
        <h1 style={{ fontFamily: 'var(--font-dancing-script)' }} className="text-5xl text-blue-600 dark:text-blue-400 font-bold tracking-wide">fyndly</h1>
      </div>
      <nav className="mt-2">
        {navigation.map((item) => (
          <div key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center px-6 py-2.5 text-sm font-medium transition-colors duration-200
                ${isParentActive(item)
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
            {item.subItems && (
              <div className="ml-6 border-l border-gray-200 dark:border-gray-700">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={`flex items-center px-6 py-2 text-sm transition-colors duration-200
                      ${isActive(subItem.href)
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                  >
                    <span className="mr-3">{subItem.icon}</span>
                    {subItem.label}
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