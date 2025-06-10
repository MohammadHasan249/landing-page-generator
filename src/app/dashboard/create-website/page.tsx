'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Plus, ChevronRight, Eye } from 'lucide-react';
import Link from 'next/link';

interface Template {
  id: string;
  name: string;
  description: string | null;
}

const CreateWebsitePage = () => {
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch templates from API
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/templates');
        
        if (!response.ok) {
          throw new Error('Failed to fetch templates');
        }
        
        const data = await response.json();
        setTemplates(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const handleTemplateSelect = (templateId?: string) => {
    const url = templateId 
      ? `/dashboard/create-website/form?templateId=${templateId}`
      : '/dashboard/create-website/form';
    router.push(url);
  };

  const handleStartFromScratch = () => {
    router.push('/dashboard/create-website/form');
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Create Website</h1>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Loading templates...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Create Website</h1>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error loading templates</h3>
              <div className="mt-2 text-sm text-red-700">{error}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Create Your Website</h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose a template to get started quickly, or start from scratch
        </p>
      </div>

      {/* Start from Scratch Option */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-md">
                <Plus className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Start from Scratch</h3>
              <p className="text-gray-600">
                Create a completely custom website with our drag-and-drop editor
              </p>
            </div>
          </div>
          <button
            onClick={handleStartFromScratch}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Start Building
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Templates Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Or choose from our templates
        </h2>
        
        {templates.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No templates available</h3>
            <p className="text-gray-600 mb-6">
              Templates are coming soon! For now, you can start from scratch.
            </p>
            <button
              onClick={handleStartFromScratch}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Custom Website
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Template Preview */}
                <div className="h-48 bg-gray-100 rounded-t-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Eye className="mx-auto h-8 w-8 mb-2" />
                    <span className="text-sm">Template Preview</span>
                  </div>
                </div>
                
                {/* Template Info */}
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {template.description || 'A beautiful template to get you started quickly.'}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleTemplateSelect(template.id)}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Use Template
                    </button>
                    <button className="inline-flex items-center justify-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Help Section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Need help choosing?
          </h3>
          <p className="text-gray-600 mb-4">
            Templates give you a head start with professional designs, while starting from scratch 
            gives you complete creative control.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/dashboard/my-websites"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View your existing websites
            </Link>
            <span className="text-gray-300">•</span>
            <Link 
              href="/dashboard"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWebsitePage; 