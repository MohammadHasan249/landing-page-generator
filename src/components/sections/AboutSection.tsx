'use client';

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Why Choose <span className="text-blue-600 dark:text-blue-400">Us</span>
          </h2>
        </div>
        
        <div className="mx-auto mt-12 max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-700">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI-powered platform generates complete landing pages in under 3 minutes, letting you focus on strategy instead of implementation.
              </p>
            </div>
            
            <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-700">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Beautiful Designs</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every template is crafted with conversion-focused design principles and modern aesthetics that make your ideas shine from day one.
              </p>
            </div>
            
            <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-700">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Proven Results</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our templates are built on conversion principles tested across thousands of successful campaigns, giving you the best chance of success.
              </p>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="mt-16 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-700">
            <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
              <div className="mb-6 flex-shrink-0 md:mb-0">
                <div className="h-20 w-20 overflow-hidden rounded-full">
                  <Image 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                    alt="Customer testimonial" 
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <svg className="mb-4 h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
                  &quot;Genique has transformed how our agency delivers landing pages to clients. What used to take us a week now takes minutes, letting us serve more clients with better results. The ROI has been incredible.&quot;
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Sarah Thompson</h4>
                  <p className="text-gray-500 dark:text-gray-400">Marketing Director, GrowthForce Agency</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">10,000+</p>
              <p className="text-gray-600 dark:text-gray-300">Pages Generated</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">100%</p>
              <p className="text-gray-600 dark:text-gray-300">Automated</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">97%</p>
              <p className="text-gray-600 dark:text-gray-300">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">3 min</p>
              <p className="text-gray-600 dark:text-gray-300">Average Generation Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };