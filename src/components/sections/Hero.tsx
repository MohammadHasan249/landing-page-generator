'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900" />
        
        {/* Background Pattern */}
        <div className="absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 opacity-50 blur-3xl dark:from-blue-900/20 dark:to-blue-800/20" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-gradient-to-br from-indigo-50 to-indigo-100 opacity-40 blur-3xl dark:from-indigo-900/20 dark:to-indigo-800/20" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Create Landing Pages in Minutes with <span className="text-blue-600 dark:text-blue-400">AI</span>
          </h1>
          
          <p className="mb-10 text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
            Our AI-powered platform generates beautiful, high-converting landing pages that help you launch faster.
          </p>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
            <Link href="/auth/register">
              <Button size="lg">
                Get Started for Free
              </Button>
            </Link>
            <Link href="/#how-it-works">
              <Button size="lg" variant="outline">
                How It Works
              </Button>
            </Link>
          </div>
          
          <div className="mt-10 space-y-6">
            <div className="flex justify-center space-x-4">
              <div className="flex items-center rounded-full bg-green-50 px-4 py-1 text-sm text-green-700 dark:bg-green-900/30 dark:text-green-400">
                <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No design skills needed
              </div>
              <div className="flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Ready in minutes
              </div>
            </div>
            
            <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-gray-200 shadow-xl dark:border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1104&q=80" 
                alt="Landing page generator demo" 
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-lg font-semibold">Professional landing pages in minutes</p>
                  <p className="text-sm opacity-80">Beautiful designs that convert visitors into customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero }; 