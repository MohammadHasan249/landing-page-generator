'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight, Sparkles, Building, Users, Palette, Phone } from 'lucide-react';

interface FormData {
  // Step 1: Business Basics
  businessName: string;
  businessDescription: string;
  industry: string;
  logoUrl: string;
  
  // Step 2: Target Audience & Service (optional)
  targetAudience: string;
  mainService: string;
  
  // Step 3: Brand & Style
  colorPreference: string;
  
  // Step 4: Contact & Integrations
  contactEmail: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    youtube: string;
    tiktok: string;
  };
  calendlyLink: string;
  pricingPlan: string;
}

const CreateWebsiteFormPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const templateId = searchParams.get('templateId');
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const totalSteps = 3;

  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    businessDescription: '',
    industry: '',
    logoUrl: '',
    targetAudience: '',
    mainService: '',
    colorPreference: '',
    contactEmail: '',
    socialMedia: {
      facebook: '',
      instagram: '',
      twitter: '',
      linkedin: '',
      youtube: '',
      tiktok: '',
    },
    calendlyLink: '',
    pricingPlan: '',
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateSocialMedia = (platform: string, url: string) => {
    setFormData(prev => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: url
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateWebsite = async () => {
    setIsGenerating(true);
    
    try {
      const response = await fetch('/api/landing-pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.businessName,
          description: formData.businessDescription,
          templateId: templateId || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create landing page');
      }

      const landingPage = await response.json();
      router.push(`/dashboard/editor/${landingPage.id}`);
    } catch (error) {
      console.error('Error creating website:', error);
      alert('Failed to create website. Please try again.');
      setIsGenerating(false);
    }
  };

  const getStepValidation = () => {
    switch (currentStep) {
      case 0:
        return formData.businessName && formData.businessDescription && formData.industry;
      case 1:
        return true; // This step is optional
      case 2:
        return true; // Color preference is optional now
      case 3:
        return formData.contactEmail;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Building className="mx-auto h-12 w-12 text-blue-500" />
              <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Tell us about your business</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Let&apos;s start with the basics</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => updateFormData('businessName', e.target.value)}
                  placeholder="e.g., Acme Consulting"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Business Description *
                </label>
                <textarea
                  value={formData.businessDescription}
                  onChange={(e) => updateFormData('businessDescription', e.target.value)}
                  placeholder="Describe what your business does, what services you offer, what makes you special..."
                  rows={4}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry *
                </label>
                <input
                  type="text"
                  value={formData.industry}
                  onChange={(e) => updateFormData('industry', e.target.value)}
                  placeholder="e.g., Technology, Healthcare, Consulting, Real Estate..."
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Logo URL <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="url"
                  value={formData.logoUrl}
                  onChange={(e) => updateFormData('logoUrl', e.target.value)}
                  placeholder="https://example.com/logo.png"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  If you have a logo hosted online, paste the URL here
                </p>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Users className="mx-auto h-12 w-12 text-blue-500" />
              <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Target Audience & Services</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Help us understand your market (optional but recommended)</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Target Audience <span className="text-gray-400">(optional)</span>
                </label>
                <textarea
                  value={formData.targetAudience}
                  onChange={(e) => updateFormData('targetAudience', e.target.value)}
                  placeholder="Who are your ideal customers? e.g., Small business owners, tech startups, busy professionals..."
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Main Service/Product <span className="text-gray-400">(optional)</span>
                </label>
                <textarea
                  value={formData.mainService}
                  onChange={(e) => updateFormData('mainService', e.target.value)}
                  placeholder="What&apos;s your primary offering? e.g., Web design services, Marketing consultation, Software development..."
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Palette className="mx-auto h-12 w-12 text-blue-500" />
              <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Brand Colors</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Choose your preferred color (optional)</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Color Preference <span className="text-gray-400">(optional)</span>
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { name: 'Blue', value: '#3B82F6', class: 'bg-blue-500' },
                    { name: 'Green', value: '#10B981', class: 'bg-green-500' },
                    { name: 'Purple', value: '#8B5CF6', class: 'bg-purple-500' },
                    { name: 'Red', value: '#EF4444', class: 'bg-red-500' },
                    { name: 'Orange', value: '#F97316', class: 'bg-orange-500' },
                    { name: 'Pink', value: '#EC4899', class: 'bg-pink-500' },
                    { name: 'Gray', value: '#6B7280', class: 'bg-gray-500' },
                    { name: 'Black', value: '#000000', class: 'bg-black' }
                  ].map(color => (
                    <button
                      key={color.name}
                      onClick={() => updateFormData('colorPreference', color.value)}
                      className={`h-12 w-full rounded-md border-2 ${color.class} ${
                        formData.colorPreference === color.value 
                          ? 'border-gray-900 ring-2 ring-gray-900 dark:border-white dark:ring-white' 
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  We&apos;ll suggest colors based on your industry if you don&apos;t choose one
                </p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Phone className="mx-auto h-12 w-12 text-blue-500" />
              <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">Contact & Integrations</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">How can customers reach you?</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => updateFormData('contactEmail', e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Social Media Links <span className="text-gray-400">(optional)</span>
                </label>
                <div className="space-y-3">
                  {[
                    { platform: 'facebook', label: 'Facebook', placeholder: 'https://facebook.com/yourpage' },
                    { platform: 'instagram', label: 'Instagram', placeholder: 'https://instagram.com/yourusername' },
                    { platform: 'twitter', label: 'Twitter', placeholder: 'https://twitter.com/yourusername' },
                    { platform: 'linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com/in/yourprofile' },
                    { platform: 'youtube', label: 'YouTube', placeholder: 'https://youtube.com/c/yourchannel' },
                    { platform: 'tiktok', label: 'TikTok', placeholder: 'https://tiktok.com/@yourusername' }
                  ].map(({ platform, label, placeholder }) => (
                    <div key={platform}>
                      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                        {label}
                      </label>
                      <input
                        type="url"
                        value={formData.socialMedia[platform as keyof typeof formData.socialMedia]}
                        onChange={(e) => updateSocialMedia(platform, e.target.value)}
                        placeholder={placeholder}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Enter the full URLs for any social media profiles you want to include
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Calendly Link <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="url"
                  value={formData.calendlyLink}
                  onChange={(e) => updateFormData('calendlyLink', e.target.value)}
                  placeholder="https://calendly.com/your-link"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  We can integrate your Calendly for easy booking
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pricing Plan <span className="text-gray-400">(optional)</span>
                </label>
                <textarea
                  value={formData.pricingPlan}
                  onChange={(e) => updateFormData('pricingPlan', e.target.value)}
                  placeholder="Brief description of your pricing or packages e.g., 'Starting at $99/month' or 'Free consultation, custom quotes'"
                  rows={2}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">Ready to Generate!</h3>
                <p className="text-blue-700 dark:text-blue-200 text-sm">
                  We&apos;ll create a personalized landing page based on your business information. 
                  You can always edit and customize it further in our editor.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isGenerating) {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Generating Your Website</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">This may take a few moments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>Step {currentStep + 1} of {totalSteps + 1}</span>
          <span>{Math.round(((currentStep) / (totalSteps)) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep) / (totalSteps)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        {renderStep()}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={currentStep === 0 ? () => router.push('/dashboard/create-website') : prevStep}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          {currentStep === 0 ? 'Back to Templates' : 'Previous'}
        </button>

        {currentStep === totalSteps ? (
          <button
            onClick={generateWebsite}
            disabled={!getStepValidation()}
            className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Generate My Website
          </button>
        ) : (
          <button
            onClick={nextStep}
            disabled={!getStepValidation()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateWebsiteFormPage; 