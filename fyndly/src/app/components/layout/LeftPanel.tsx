'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  CpuChipIcon,
  ChartBarIcon,
  BookOpenIcon,
  Cog6ToothIcon,
  FolderIcon,
  LightBulbIcon,
  DocumentIcon,
  MegaphoneIcon,
  DocumentDuplicateIcon,
  BeakerIcon,
  PencilIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  subItems?: NavItem[];
}

interface LeftPanelProps {
  onHoverChange?: (isHovered: boolean) => void;
}

const navigation: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  {
    label: 'Research Hub',
    href: '/research-hub',
    icon: MagnifyingGlassIcon,
    subItems: [
      { label: 'My Collections', href: '/research-hub/collections', icon: FolderIcon },
      { label: 'Saved Insights', href: '/research-hub/insights', icon: LightBulbIcon },
    ],
  },
  {
    label: 'Content Studio',
    href: '/content-studio',
    icon: PencilSquareIcon,
    subItems: [
      { label: 'Drafts', href: '/content-studio/drafts', icon: DocumentIcon },
      { label: 'Published', href: '/content-studio/published', icon: MegaphoneIcon },
      { label: 'Templates', href: '/content-studio/templates', icon: DocumentDuplicateIcon },
    ],
  },
  {
    label: 'AI Agents',
    href: '/ai-agents',
    icon: CpuChipIcon,
    subItems: [
      { label: 'Research Agent', href: '/ai-agents/research', icon: BeakerIcon },
      { label: 'Writing Agent', href: '/ai-agents/writing', icon: PencilIcon },
      { label: 'Workflow Agent', href: '/ai-agents/workflow', icon: BoltIcon },
    ],
  },
  { label: 'Insights & Analytics', href: '/analytics', icon: ChartBarIcon },
  { label: 'Library', href: '/library', icon: BookOpenIcon },
  { label: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

export default function LeftPanel({ onHoverChange }: LeftPanelProps) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    onHoverChange?.(isHovered);
  }, [isHovered, onHoverChange]);

  const isActive = (path: string) => pathname === path;
  const isParentActive = (item: NavItem) => 
    item.subItems?.some(subItem => pathname === subItem.href) || pathname === item.href;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
        isHovered ? 'w-64' : 'w-16'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`p-4 transition-all duration-300 ${isHovered ? 'px-6' : 'text-center'}`}>
        {isHovered ? (
          <h1 
            style={{ fontFamily: 'var(--font-dancing-script)' }} 
            className="text-5xl text-blue-600 font-bold tracking-wide"
          >
            fyndly
          </h1>
        ) : (
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
            f
          </div>
        )}
      </div>
      <nav className={`mt-2 px-2 transition-all duration-300 ${isHovered ? 'px-3' : 'px-2'}`}>
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
              <item.icon className={`w-5 h-5 ${!isHovered ? 'mx-auto' : 'mr-3'}`} />
              <span className={`font-inter tracking-wide whitespace-nowrap transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0 w-0'
              }`}>
                {item.label}
              </span>
            </Link>
            {isHovered && item.subItems && (
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
                    <subItem.icon className="w-4 h-4 mr-2.5" />
                    <span className="font-inter tracking-wide whitespace-nowrap">
                      {subItem.label}
                    </span>
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