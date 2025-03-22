'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LeftPanel() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )},
    // Add more navigation items here
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen fixed left-0 top-0 transition-colors duration-200">
      <div className="h-16 border-b border-gray-200 dark:border-gray-700 flex items-center px-6">
        <Link href="/dashboard" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Fyndly
        </Link>
      </div>
      
      <nav className="mt-6">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                isActive ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 border-r-4 border-indigo-600 dark:border-indigo-400' : ''
              }`}
            >
              <span className={isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500'}>
                {item.icon}
              </span>
              <span className="ml-3">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
} 