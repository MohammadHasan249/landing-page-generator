'use client';

import React from 'react';

const ProblemStatement = () => {

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            The <span className="text-blue-600 dark:text-blue-400">Challenge</span>
          </h2>
          <div className="mb-12 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Creating effective landing pages is a significant bottleneck in the launch process.
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-3 md:gap-8">
          <div className="text-center">
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-red-100 dark:bg-red-900/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Time-Consuming</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Traditional page building takes days or weeks, delaying your time to market.
            </p>
          </div>
          
          <div className="text-center">
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-red-100 dark:bg-red-900/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Expensive</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Hiring designers and developers is costly, making it difficult to justify the investment.
            </p>
          </div>
          
          <div className="text-center">
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-red-100 dark:bg-red-900/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Technical Complexity</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Complex tools require technical expertise that distracts from your core business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProblemStatement }; 