'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';

interface LandingPage {
  id: string;
  name: string;
  description: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  template: {
    name: string;
    thumbnail: string | null;
  } | null;
}

export default function DashboardPage() {
  
  const [landingPages, setLandingPages] = useState<LandingPage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with a timeout
    const timer = setTimeout(() => {
      setLandingPages([]);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Landing Pages</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          View and manage your landing pages
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="stats flex flex-wrap gap-4">
          <div className="stat rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Pages</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{landingPages.length}</p>
          </div>
          
          <div className="stat rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Published</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {landingPages.filter(page => page.published).length}
            </p>
          </div>
        </div>
        
        <Link 
          href="/dashboard/create-website"
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Create New
        </Link>
      </div>

      {loading ? (
        <div className="flex h-64 items-center justify-center rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-col items-center">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Loading your landing pages...</p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {landingPages.map((page) => (
            <div key={page.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                {page.template?.thumbnail ? (
                  <Image 
                    src={page.template.thumbnail} 
                    alt={page.name} 
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500">No preview</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{page.name}</h3>
                  {page.published && (
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/20 dark:text-green-300">
                      Published
                    </span>
                  )}
                </div>
                {page.description && (
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{page.description}</p>
                )}
                <div className="mt-4 flex justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Updated {new Date(page.updatedAt).toLocaleDateString()}
                  </span>
                  <Link 
                    href={`/dashboard/editor/${page.id}`}
                    className="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-3 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {landingPages.length === 0 && (
            <div className="col-span-full flex h-64 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800">
              <div className="text-center px-4">
                <p className="mb-4 text-gray-600 dark:text-gray-300">You haven&apos;t created any landing pages yet.</p>
                <Link 
                  href="/dashboard/create-website"
                  className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Create your first landing page
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 