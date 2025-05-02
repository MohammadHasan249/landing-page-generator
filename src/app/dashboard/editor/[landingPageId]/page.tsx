'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';

interface LandingPage {
  id: string;
  name: string;
  description: string | null;
  content: any;
  published: boolean;
}

export default function EditorPage() {
  const params = useParams();
  const landingPageId = params.landingPageId as string;
  const [landingPage, setLandingPage] = useState<LandingPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchLandingPage() {
      try {
        const response = await fetch(`/api/landing-pages/${landingPageId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch landing page');
        }
        const data = await response.json();
        setLandingPage(data);
      } catch (error) {
        console.error('Error fetching landing page:', error);
      } finally {
        setLoading(false);
      }
    }

    if (landingPageId) {
      fetchLandingPage();
    }
  }, [landingPageId]);

  async function saveLandingPage() {
    if (!landingPage) return;
    
    try {
      setSaving(true);
      const response = await fetch(`/api/landing-pages/${landingPageId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: landingPage.name,
          description: landingPage.description,
          content: landingPage.content,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save landing page');
      }
      
      alert('Landing page saved successfully!');
    } catch (error) {
      console.error('Error saving landing page:', error);
      alert('Failed to save landing page. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500 mx-auto"></div>
          <p>Loading editor...</p>
        </div>
      </div>
    );
  }

  if (!landingPage) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Landing page not found</h2>
          <p className="mb-4">The landing page you're looking for doesn't exist or you don't have access to it.</p>
          <Link 
            href="/dashboard"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Editor Header */}
      <header className="border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <Link
              href="/dashboard"
              className="mr-4 inline-flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
            <h1 className="text-lg font-medium text-gray-900 dark:text-white">
              {landingPage.name}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={saveLandingPage}
              disabled={saving}
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {saving ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-1 border-t-1 border-white"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Editor Content */}
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 p-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
            <h2 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">Landing Page Editor</h2>
            <p className="text-gray-600 dark:text-gray-300">
              This is a placeholder for the landing page editor. In a complete implementation, this would be a 
              drag-and-drop editor where users can customize their landing page content.
            </p>
            <div className="mt-4">
              <pre className="mt-4 overflow-auto rounded bg-gray-100 p-4 text-sm dark:bg-gray-700">
                <code>{JSON.stringify(landingPage.content, null, 2)}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 