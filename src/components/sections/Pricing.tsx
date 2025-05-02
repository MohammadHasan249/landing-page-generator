'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

interface PricingPlan {
  title: string;
  price: number;
  description: string;
  features: string[];
  buttonText: string;
  recommended: boolean;
}

interface PricingCardProps extends PricingPlan {}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  recommended = false 
}: PricingCardProps) => {
  return (
    <div className={`relative rounded-xl ${
      recommended 
        ? 'bg-blue-50 border-2 border-blue-500 dark:bg-blue-900/20 dark:border-blue-400' 
        : 'bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700'
      } p-6 shadow-lg`}
    >
      {recommended && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-blue-600 dark:bg-blue-500 px-3 py-1 text-xs font-medium text-white">
          Most Popular
        </div>
      )}
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <div className="mb-2">
          <span className="text-4xl font-extrabold text-gray-900 dark:text-white">${price}</span>
          {price > 0 && <span className="text-gray-600 dark:text-gray-400">/month</span>}
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      
      <ul className="mb-8 space-y-3 h-64 overflow-auto">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center">
            <svg className="mr-2 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="text-center">
        <Link href={title === "Agency" ? "/contact-sales" : "/auth/register"}>
          <Button 
            size="lg" 
            variant={recommended ? "primary" : "outline"} 
            className="w-full py-3"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans: PricingPlan[] = [
    {
      title: "Starter",
      price: 0,
      description: "Perfect for trying out our platform",
      features: [
        "3 landing page generations",
        "Unlimited content edits",
        "Basic templates",
        "Free subdomain hosting",
        "5 sections per page"
      ],
      buttonText: "Start Free",
      recommended: false
    },
    {
      title: "Pro",
      price: 29,
      description: "Great for entrepreneurs and freelancers",
      features: [
        "15 landing page generations",
        "Unlimited content edits",
        "Premium templates",
        "Custom domain connection",
        "10 sections per page",
        "Analytics integration",
        "A/B testing"
      ],
      buttonText: "Get Started",
      recommended: true
    },
    {
      title: "Agency",
      price: 79,
      description: "For marketing agencies and teams",
      features: [
        "Up to 5 team members",
        "Unlimited landing pages",
        "White-label options",
        "All premium templates",
        "Custom domain connection",
        "Unlimited sections per page",
        "Advanced analytics",
        "Priority support"
      ],
      buttonText: "Contact Sales",
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Simple, Transparent <span className="text-blue-600 dark:text-blue-400">Pricing</span>
          </h2>
          
          <div className="mb-12 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Choose the plan that fits your needs. Whether you're an agency or a solo entrepreneur, we've got you covered.
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Need a custom solution? <Link href="/contact-sales" className="text-blue-600 underline dark:text-blue-400">Contact us</Link> for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Pricing }; 