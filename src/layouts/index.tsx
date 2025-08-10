'use client';
import Navbar from './nav-bar-app';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
    </>
  );
}
