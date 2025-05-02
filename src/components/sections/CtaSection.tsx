'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

const CtaSection = () => {
  return (
    <section id="get-started" className="bg-blue-600 py-20 text-white dark:bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Transform How You Create Landing Pages?
          </h2>
          <p className="mb-10 text-xl text-blue-100">
            Start creating beautiful, high-converting landing pages in minutes
          </p>
          
          <div className="flex justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-blue-50 dark:text-blue-800 dark:hover:bg-white border-0 px-8 py-4 font-medium shadow-md">
                Get Started for Free
              </Button>
            </Link>
          </div>
          
          <p className="mt-8 text-sm text-blue-100">
            No credit card required. Start with our free plan and upgrade anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export { CtaSection }; 