'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface Website {
  id: string;
  name: string;
  url: string;
  visits: number;
  conversions: number;
  conversionRate: string;
  created: string;
  updated: string;
  published: boolean;
}

const MyWebsitesPage = () => {
  // Mock websites data
  const [websites, setWebsites] = useState<Website[]>([
    {
      id: '1',
      name: 'SaaS Product',
      url: 'https://saas-product.example.com',
      visits: 1200,
      conversions: 36,
      conversionRate: '3.0%',
      created: '2023-10-15',
      updated: '2023-11-02',
      published: true,
    },
    {
      id: '2',
      name: 'E-commerce Shop',
      url: 'https://shop.example.com',
      visits: 3500,
      conversions: 122,
      conversionRate: '3.5%',
      created: '2023-08-22',
      updated: '2023-10-30',
      published: true,
    },
    {
      id: '3',
      name: 'Health App Landing',
      url: 'https://health-app.example.com',
      visits: 850,
      conversions: 41,
      conversionRate: '4.8%',
      created: '2023-11-05',
      updated: '2023-11-10',
      published: true,
    },
    {
      id: '4',
      name: 'New Product (Draft)',
      url: '',
      visits: 0,
      conversions: 0,
      conversionRate: '0.0%',
      created: '2023-11-18',
      updated: '2023-11-18',
      published: false,
    },
  ]);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<keyof Website>('updated');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Handle sort changes
  const handleSort = (column: keyof Website) => {
    if (sortBy === column) {
      // Toggle direction if already sorting by this column
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // New column, default to descending
      setSortBy(column);
      setSortDirection('desc');
    }
  };

  // Filter and sort websites
  const filteredWebsites = websites
    .filter(website => 
      website.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      website.url.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
        return sortDirection === 'asc' 
          ? (aValue === bValue ? 0 : aValue ? -1 : 1)
          : (aValue === bValue ? 0 : aValue ? 1 : -1);
      }
      
      return 0;
    });

  // Handle website deletion
  const handleDeleteWebsite = (id: string) => {
    if (confirm('Are you sure you want to delete this website? This action cannot be undone.')) {
      setWebsites(websites.filter(website => website.id !== id));
    }
  };

  // Handle website duplication
  const handleDuplicateWebsite = (website: Website) => {
    const newWebsite: Website = {
      ...website,
      id: Date.now().toString(),
      name: `${website.name} (Copy)`,
      url: '',
      visits: 0,
      conversions: 0,
      conversionRate: '0.0%',
      created: new Date().toISOString().split('T')[0],
      updated: new Date().toISOString().split('T')[0],
      published: false,
    };
    
    setWebsites([...websites, newWebsite]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Websites</h1>
        <div className="mt-3 sm:mt-0">
          <Link href="/dashboard/create-website">
            <Button>
              <svg 
                className="mr-2 h-4 w-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create New Website
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <div className="relative w-full sm:w-64">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search websites..."
            className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 ml-auto">
          <select 
            className="rounded-md border border-gray-300 py-2 px-3 focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => handleSort(e.target.value as keyof Website)}
            value={sortBy}
          >
            <option value="name">Name</option>
            <option value="visits">Visits</option>
            <option value="conversions">Conversions</option>
            <option value="created">Date Created</option>
            <option value="updated">Last Updated</option>
          </select>
          
          <button
            className="flex items-center gap-1 rounded-md border border-gray-300 bg-white py-2 px-3 hover:bg-gray-50"
            onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
          >
            {sortDirection === 'asc' ? (
              <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
            {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        </div>
      </div>
      
      {/* Website Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center">
                  Website
                  {sortBy === 'name' && (
                    <svg className={`ml-1 h-4 w-4 ${sortDirection === 'asc' ? '' : 'transform rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  )}
                </div>
              </th>
              <th 
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('visits')}
              >
                <div className="flex items-center">
                  Visits
                  {sortBy === 'visits' && (
                    <svg className={`ml-1 h-4 w-4 ${sortDirection === 'asc' ? '' : 'transform rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  )}
                </div>
              </th>
              <th 
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('conversions')}
              >
                <div className="flex items-center">
                  Conversions
                  {sortBy === 'conversions' && (
                    <svg className={`ml-1 h-4 w-4 ${sortDirection === 'asc' ? '' : 'transform rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  )}
                </div>
              </th>
              <th 
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('updated')}
              >
                <div className="flex items-center">
                  Last Updated
                  {sortBy === 'updated' && (
                    <svg className={`ml-1 h-4 w-4 ${sortDirection === 'asc' ? '' : 'transform rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  )}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredWebsites.length > 0 ? (
              filteredWebsites.map((website) => (
                <tr key={website.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <div className="font-medium text-gray-900">{website.name}</div>
                      {website.url && (
                        <a 
                          href={website.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {website.url.replace(/^https?:\/\//, '')}
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {website.visits.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{website.conversions.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">{website.conversionRate} rate</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {website.updated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        website.published
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {website.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex gap-2 justify-end">
                      <Link href={`/dashboard/edit-website/${website.id}`}>
                        <span className="text-blue-600 hover:text-blue-900 cursor-pointer">
                          Edit
                        </span>
                      </Link>
                      <button
                        onClick={() => handleDuplicateWebsite(website)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Duplicate
                      </button>
                      <button
                        onClick={() => handleDeleteWebsite(website.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                  No websites found. Try adjusting your search or{' '}
                  <Link href="/dashboard/create-website">
                    <span className="text-blue-600 hover:text-blue-900 cursor-pointer">
                      create a new one
                    </span>
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWebsitesPage; 