'use client';

import React from 'react';
import { DogTag } from '../ui/DogTag';

const Solution = () => {
  return (
    <section id="solutions" className="bg-blue-50 py-20 dark:bg-blue-950/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Our <span className="text-blue-600 dark:text-blue-400">Solution</span>
          </h2>
          
          <div className="mb-12 text-lg text-gray-600 dark:text-gray-300">
            <p className="mb-6">
              We&apos;ve created an AI-powered landing page generator that automatically creates
              beautiful, high-converting pages in minutes.
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Solution benefits */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-green-600 dark:text-green-400">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Rapid Iteration</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Generate and test multiple landing pages in minutes, not days. Perfect for quickly validating new ideas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-green-600 dark:text-green-400">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI-Designed Templates</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Our AI automatically tailors designs proven to convert, giving you professional results every time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-green-600 dark:text-green-400">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Complete Control</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Full creative control without technical limitations. Easily customize every element to match your vision.
                  </p>
                </div>
              </div>
            </div>
            
            {/* More solution benefits */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-green-600 dark:text-green-400">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Multiple Variations</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Generate multiple versions until you find the perfect fit, enabling rapid A/B testing without extra work.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-green-600 dark:text-green-400">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Instant Deployment</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Publish with one click and start driving traffic immediately. Get results faster with minimal effort.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-green-600 dark:text-green-400">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Built-in Best Practices</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Our system automatically incorporates conversion optimization techniques that maximize results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <DogTag />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Solution }; 