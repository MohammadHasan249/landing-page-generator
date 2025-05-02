'use client';

import React from 'react';
import Link from 'next/link';
import { SignUp } from '@clerk/nextjs';
import { Logo } from '@/components/ui/Logo';

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="flex items-center">
          <Logo variant="light" />
        </Link>
      </div>
      
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md">
          <SignUp 
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-blue-600 hover:bg-blue-700 text-white",
                card: "bg-white dark:bg-gray-800 shadow-xl",
              }
            }}
            path="/auth/register"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; 