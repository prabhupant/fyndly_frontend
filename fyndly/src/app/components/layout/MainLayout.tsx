'use client';

import { useState } from 'react';
import LeftPanel from './LeftPanel';
import TopPanel from './TopPanel';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isLeftPanelHovered, setIsLeftPanelHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <LeftPanel onHoverChange={setIsLeftPanelHovered} />
      <div className={`transition-all duration-300 ${isLeftPanelHovered ? 'pl-64' : 'pl-16'}`}>
        <TopPanel />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 