'use client';

import React, { useState } from 'react';

interface WebsiteAnalytics {
  id: string;
  name: string;
  visits: number;
  pageViews: number;
  conversionRate: number;
  averageTimeOnPage: string;
  bounceRate: number;
}

interface DailyVisits {
  date: string;
  visits: number;
  conversions: number;
}

const AnalyticsPage = () => {
  const [selectedWebsite, setSelectedWebsite] = useState<string>('all');
  const [dateRange, setDateRange] = useState<string>('7d');

  // Mock websites data
  const websites: WebsiteAnalytics[] = [
    {
      id: 'website1',
      name: 'Business Agency',
      visits: 5289,
      pageViews: 12450,
      conversionRate: 4.3,
      averageTimeOnPage: '2m 34s',
      bounceRate: 42.5,
    },
    {
      id: 'website2',
      name: 'E-commerce Store',
      visits: 12580,
      pageViews: 37890,
      conversionRate: 6.8,
      averageTimeOnPage: '3m 45s',
      bounceRate: 35.2,
    },
    {
      id: 'website3',
      name: 'SaaS Landing Page',
      visits: 3470,
      pageViews: 9230,
      conversionRate: 8.2,
      averageTimeOnPage: '2m 12s',
      bounceRate: 40.1,
    },
  ];

  // Mock daily visits data
  const dailyVisitsData: DailyVisits[] = [
    { date: 'Jun 1', visits: 720, conversions: 32 },
    { date: 'Jun 2', visits: 830, conversions: 41 },
    { date: 'Jun 3', visits: 950, conversions: 45 },
    { date: 'Jun 4', visits: 890, conversions: 38 },
    { date: 'Jun 5', visits: 1020, conversions: 51 },
    { date: 'Jun 6', visits: 1150, conversions: 62 },
    { date: 'Jun 7', visits: 980, conversions: 47 },
  ];

  // Calculate totals for all websites
  const getTotals = () => {
    const totals = websites.reduce(
      (acc, website) => {
        acc.visits += website.visits;
        acc.pageViews += website.pageViews;
        return acc;
      },
      { visits: 0, pageViews: 0 }
    );
    
    const avgConversionRate = websites.reduce((sum, website) => sum + website.conversionRate, 0) / websites.length;
    const avgBounceRate = websites.reduce((sum, website) => sum + website.bounceRate, 0) / websites.length;
    
    return {
      ...totals,
      conversionRate: avgConversionRate,
      bounceRate: avgBounceRate,
    };
  };

  // Get data for selected website or totals
  const getSelectedData = () => {
    if (selectedWebsite === 'all') {
      return getTotals();
    }
    return websites.find((website) => website.id === selectedWebsite);
  };

  const selectedData = getSelectedData();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Website Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">Track your websites&apos; performance and conversions</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <select
            value={selectedWebsite}
            onChange={(e) => setSelectedWebsite(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="all">All Websites</option>
            {websites.map((website) => (
              <option key={website.id} value={website.id}>
                {website.name}
              </option>
            ))}
          </select>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="3m">Last 3 Months</option>
            <option value="6m">Last 6 Months</option>
            <option value="1y">Last Year</option>
          </select>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Total Visits</h2>
              <p className="text-2xl font-semibold text-gray-900">{selectedData?.visits.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Page Views</h2>
              <p className="text-2xl font-semibold text-gray-900">{selectedData?.pageViews.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Conversion Rate</h2>
              <p className="text-2xl font-semibold text-gray-900">{selectedData?.conversionRate.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Bounce Rate</h2>
              <p className="text-2xl font-semibold text-gray-900">{selectedData?.bounceRate.toFixed(1)}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium text-gray-900">Visits & Conversions</h2>
        
        {/* Simple Bar Chart Visualization */}
        <div className="mt-4 h-80">
          <div className="flex h-full flex-col">
            <div className="flex h-full items-end space-x-2">
              {dailyVisitsData.map((data, index) => (
                <div key={index} className="flex h-full flex-1 flex-col items-center justify-end space-y-1">
                  <div 
                    className="w-full bg-blue-500 transition-all duration-300"
                    style={{ height: `${(data.visits / 1200) * 100}%` }}
                  ></div>
                  <div 
                    className="w-full bg-green-500 transition-all duration-300"
                    style={{ height: `${(data.conversions / 1200) * 100}%` }}
                  ></div>
                  <span className="text-xs font-medium text-gray-500">{data.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-center space-x-8">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-sm bg-blue-500"></div>
            <span className="ml-2 text-xs text-gray-600">Visits</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-sm bg-green-500"></div>
            <span className="ml-2 text-xs text-gray-600">Conversions</span>
          </div>
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-gray-900">Traffic Sources</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Direct</span>
                <span className="text-sm font-medium text-gray-900">35%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-blue-500" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Organic Search</span>
                <span className="text-sm font-medium text-gray-900">28%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-green-500" style={{ width: '28%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Social Media</span>
                <span className="text-sm font-medium text-gray-900">20%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-purple-500" style={{ width: '20%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Referral</span>
                <span className="text-sm font-medium text-gray-900">12%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-yellow-500" style={{ width: '12%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Email</span>
                <span className="text-sm font-medium text-gray-900">5%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-red-500" style={{ width: '5%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-gray-900">Top Pages</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Page</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Views</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Avg. Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Home</div>
                        <div className="text-xs text-gray-500">/</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">4,890</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">1m 20s</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">About</div>
                        <div className="text-xs text-gray-500">/about</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">2,103</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">2m 15s</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Pricing</div>
                        <div className="text-xs text-gray-500">/pricing</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">1,876</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">1m 45s</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Contact</div>
                        <div className="text-xs text-gray-500">/contact</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">1,250</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">2m 30s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="flex justify-end">
        <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          <svg className="mr-2 -ml-1 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export Report
        </button>
      </div>
    </div>
  );
};

export default AnalyticsPage; 