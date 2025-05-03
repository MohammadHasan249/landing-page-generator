'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useUser, useClerk } from '@clerk/nextjs';
import { HomeIcon, Layers3Icon, PlusIcon, BarChart3Icon, LogOutIcon, UserIcon } from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  // Don't render anything while checking auth status
  if (!isLoaded || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  const navigation: SidebarItem[] = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: <HomeIcon className="h-5 w-5" />,
    },
    {
      name: 'My Websites',
      href: '/dashboard/my-websites',
      icon: <Layers3Icon className="h-5 w-5" />,
    },
    {
      name: 'Create Website',
      href: '/dashboard/create-website',
      icon: <PlusIcon className="h-5 w-5" />,
    },
    {
      name: 'Analytics',
      href: '/dashboard/analytics',
      icon: <BarChart3Icon className="h-5 w-5" />,
    },
    {
      name: 'Account',
      href: '/dashboard/account',
      icon: <UserIcon className="h-5 w-5" />,
    },
  ];

  // Handle sign out
  const handleSignOut = () => {
    signOut(() => router.push('/'));
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Desktop sidebar */}
      <div className="hidden w-64 shrink-0 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800 md:block">
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6 dark:border-gray-700">
          <Link href="/dashboard" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Genique
          </Link>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200'
              }`}
            >
              <span className={`mr-3 ${pathname === item.href ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`}>
                {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
          
          {/* Sign out button */}
          <button 
            onClick={handleSignOut}
            className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <span className="mr-3 text-gray-400 dark:text-gray-500">
              <LogOutIcon className="h-5 w-5" />
            </span>
            Sign Out
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Mobile header */}
        <div className="border-b border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-800 md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Genique
            </Link>
          </div>
          
          <div className="mt-4 flex gap-1 overflow-x-auto pb-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex shrink-0 items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200'
                }`}
              >
                <span className={`mr-2 ${pathname === item.href ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
            
            {/* Mobile sign out */}
            <button
              onClick={handleSignOut}
              className="flex shrink-0 items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            >
              <span className="mr-2 text-gray-400 dark:text-gray-500">
                <LogOutIcon className="h-5 w-5" />
              </span>
              Sign Out
            </button>
          </div>
        </div>

        {/* Content area */}
        <main className="p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 