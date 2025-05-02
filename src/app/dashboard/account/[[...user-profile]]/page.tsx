'use client';

import { UserProfile } from '@clerk/nextjs';

export default function AccountPage() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Account Settings</h1>
      <UserProfile path="/dashboard/account" routing="path" />
    </div>
  );
}
