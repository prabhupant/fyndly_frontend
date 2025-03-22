'use client';

import { ThemeProvider } from '@/app/context/ThemeContext';
import MainLayout from './MainLayout';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <MainLayout>
        {children}
      </MainLayout>
    </ThemeProvider>
  );
} 