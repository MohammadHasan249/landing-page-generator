'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';

const AuthErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const getErrorMessage = () => {
    switch (error) {
      case 'Configuration':
        return 'There is a problem with the server configuration.';
      case 'AccessDenied':
        return 'You do not have access to this resource.';
      case 'OAuthSignin':
      case 'OAuthCallback':
      case 'OAuthCreateAccount':
      case 'OAuthAccountNotLinked':
        return 'There was a problem with the Google authentication. Please try again.';
      case 'EmailCreateAccount':
      case 'Callback':
      case 'EmailSignin':
        return 'There was a problem with the email authentication. Please try again.';
      case 'CredentialsSignin':
        return 'The email or password you entered is incorrect.';
      case 'SessionRequired':
        return 'You must be signed in to access this page.';
      default:
        return 'An unknown error occurred. Please try again.';
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="flex items-center">
          <Logo variant="light" />
        </Link>
      </div>
      
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
              <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Authentication Error</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{getErrorMessage()}</p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <Link href="/auth/login" className="w-full">
              <Button className="w-full">Try Again</Button>
            </Link>
            <Link href="/" className="w-full">
              <Button variant="outline" className="w-full">Return to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthErrorPage; 