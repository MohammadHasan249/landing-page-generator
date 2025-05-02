'use client';

import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            How It <span className="text-blue-600 dark:text-blue-400">Works</span>
          </h2>
          
          <div className="mb-16 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Our simple 4-step process lets you create landing pages faster than ever, perfect for agencies and entrepreneurs with multiple ideas.
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-blue-100 dark:bg-blue-950" />
            
            {/* Steps */}
            <div className="space-y-12 md:space-y-0">
              {/* Step 1 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className="relative md:order-last md:flex md:flex-col md:justify-center md:pl-4">
                  <div className="rounded-xl bg-white p-6 shadow-lg md:shadow-xl dark:bg-gray-800">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                      1. Answer Simple Questions
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Tell us about your business, target audience, and goals through our guided questionnaire.
                      It takes just a few minutes to complete.
                    </p>
                  </div>
                </div>
                
                {/* Timeline node */}
                <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow dark:border-gray-900 dark:bg-blue-500">
                  1
                </div>
                
                <div className="pt-4 md:pr-4 md:pt-0" />
              </div>
              
              {/* Step 2 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className="relative md:flex md:flex-col md:justify-center md:pr-4">
                  <div className="rounded-xl bg-white p-6 shadow-lg md:shadow-xl dark:bg-gray-800">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                      2. AI Generates Your Page
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our AI analyzes your input and automatically creates a complete landing page
                      optimized for your industry and target audience.
                    </p>
                  </div>
                </div>
                
                {/* Timeline node */}
                <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow dark:border-gray-900 dark:bg-blue-500">
                  2
                </div>
                
                <div className="pt-4 md:pl-4 md:pt-0" />
              </div>
              
              {/* Step 3 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className="relative md:order-last md:flex md:flex-col md:justify-center md:pl-4">
                  <div className="rounded-xl bg-white p-6 shadow-lg md:shadow-xl dark:bg-gray-800">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                      3. Edit If You Want
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your page works perfectly as-is, but you can easily modify any content 
                      through our simple editor. Perfect for agencies managing multiple clients.
                    </p>
                  </div>
                </div>
                
                {/* Timeline node */}
                <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow dark:border-gray-900 dark:bg-blue-500">
                  3
                </div>
                
                <div className="pt-4 md:pr-4 md:pt-0" />
              </div>
              
              {/* Step 4 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className="relative md:flex md:flex-col md:justify-center md:pr-4">
                  <div className="rounded-xl bg-white p-6 shadow-lg md:shadow-xl dark:bg-gray-800">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                      4. Publish Instantly
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      With a single click, publish your landing page to our fast, secure hosting.
                      Ideal for entrepreneurs who need to quickly test multiple ideas.
                    </p>
                  </div>
                </div>
                
                {/* Timeline node */}
                <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow dark:border-gray-900 dark:bg-blue-500">
                  4
                </div>
                
                <div className="pt-4 md:pl-4 md:pt-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HowItWorks }; 