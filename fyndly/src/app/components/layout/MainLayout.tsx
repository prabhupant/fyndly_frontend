'use client';

import LeftPanel from './LeftPanel';
import TopPanel from './TopPanel';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <LeftPanel />
      <div className="pl-64"> {/* Same as LeftPanel width */}
        <TopPanel />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 