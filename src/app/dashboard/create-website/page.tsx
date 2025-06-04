'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Plus } from 'lucide-react';
import Image from 'next/image';

interface Template {
  id: string;
  name: string;
  description: string | null;
  thumbnail: string | null;
  category: string;
}

const CreateWebsitePage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [createLoading, setCreateLoading] = useState(false);

  // Mock templates data
  const templates: Template[] = [
    {
      id: '1',
      name: 'Business Landing Page',
      description: 'Perfect for small businesses and startups',
      thumbnail: 'https://placehold.co/600x400/e6f7ff/0072b1?text=Business',
      category: 'business',
    },
    {
      id: '2',
      name: 'Portfolio Showcase',
      description: 'Showcase your work with this elegant portfolio template',
      thumbnail: 'https://placehold.co/600x400/fff5e6/cc7000?text=Portfolio',
      category: 'portfolio',
    },
    {
      id: '3',
      name: 'E-commerce Store',
      description: 'Start selling products with this e-commerce template',
      thumbnail: 'https://placehold.co/600x400/e6ffe6/00730a?text=E-commerce',
      category: 'ecommerce',
    },
    {
      id: '4',
      name: 'Blog Template',
      description: 'Share your thoughts with this blog template',
      thumbnail: 'https://placehold.co/600x400/f7e6ff/5c0099?text=Blog',
      category: 'blog',
    },
    {
      id: '5',
      name: 'Product Launch',
      description: 'Perfect for new product announcements',
      thumbnail: 'https://placehold.co/600x400/ffe6e6/990000?text=Launch',
      category: 'business',
    },
    {
      id: '6',
      name: 'Professional Services',
      description: 'Ideal for consultants and service providers',
      thumbnail: 'https://placehold.co/600x400/e6f7ff/0072b1?text=Services',
      category: 'business',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'business', name: 'Business' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'blog', name: 'Blog' },
  ];

  // Filter templates based on selected category and search query
  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (template.description && template.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  function createLandingPage(templateId?: string) {
    setCreateLoading(true);
    
    // Mock creating a landing page - in a real app this would call an API
    console.log(`Creating landing page with template ID: ${templateId || 'blank'}`);
    
    // Simulate a successful creation and redirect
    setTimeout(() => {
      const mockId = `mock-${Math.random().toString(36).substring(2, 9)}`;
      router.push(`/dashboard/editor/${mockId}`);
      setCreateLoading(false);
    }, 1000);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Create New Website</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Choose a template to get started or start from scratch</p>
        </div>
        <button
          onClick={() => createLandingPage()}
          disabled={createLoading}
          className="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 disabled:opacity-50 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30"
        >
          <Plus className="mr-2 -ml-1 h-4 w-4" />
          Blank Canvas
        </button>
      </div>

      {/* Search and Category Filter */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="w-full sm:w-64">
          <label htmlFor="search" className="sr-only">
            Search templates
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 sm:text-sm"
              placeholder="Search templates"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white dark:bg-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              {template.thumbnail ? (
                <Image
                  width={100}
                  height={100}
                  src={template.thumbnail}
                  alt={template.name}
                  className="h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <span className="text-gray-400 dark:text-gray-500">No preview</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{template.name}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{template.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                  {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                </span>
                <button
                  onClick={() => createLandingPage(template.id)}
                  disabled={createLoading}
                  className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 disabled:opacity-50 dark:bg-gray-700 dark:text-blue-300 dark:hover:bg-gray-600"
                >
                  Use Template
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 py-12 dark:border-gray-700">
          <svg className="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No templates found</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you&apos;re looking for.</p>
        </div>
      )}
    </div>
  );
};

export default CreateWebsitePage; 