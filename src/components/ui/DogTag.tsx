'use client';

import React from 'react';

interface DogTagProps {
  className?: string;
}

export function DogTag({ className = '' }: DogTagProps) {
  return (
    <div className={`relative mx-auto max-w-3xl rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-6 shadow-md dark:from-blue-950/40 dark:to-indigo-950/40 ${className}`}>
      <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-blue-500 px-4 py-1 text-xs font-medium text-white dark:bg-blue-600">
        Built with Genique AI
      </div>
      
      <div className="text-center">
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
          "We wouldn't sell it if we didn't use it ourselves."
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          This entire website was created with our AI landing page generator.
          From concept to launch in under 15 minutes!
        </p>
      </div>
      
      <div className="mt-4 flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-2">
          <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Authentic Results</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Production Ready</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Fast Generation</span>
        </div>
      </div>
    </div>
  );
} 