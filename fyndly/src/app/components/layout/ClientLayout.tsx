'use client';

import MainLayout from './MainLayout';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
      <MainLayout>
        {children}
      </MainLayout>
  );
} 