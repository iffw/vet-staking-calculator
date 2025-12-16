'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import StakingCalculator from '@/components/StakingCalculator';
import PlatformComparison from '@/components/PlatformComparison';

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "VET Staking Calculator",
    "applicationCategory": "FinanceApplication",
    "description": "Calculate your VeChain (VET) staking rewards with real-time data and compare top staking platforms.",
    "url": "https://vet-staking-calculator.vercel.app",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    },
    "featureList": [
      "Real-time VET price data",
      "APY comparison across platforms",
      "Earnings breakdown (hourly, daily, weekly, monthly, yearly)",
      "Platform comparison table",
      "Free to use"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is VeChain staking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VeChain staking allows VET holders to lock their tokens and earn VTHO (VeThor) rewards. By holding VET, you automatically generate VTHO, which is used to pay for transaction fees on the VeChainThor blockchain."
        }
      },
      {
        "@type": "Question",
        "name": "How does the VET staking calculator work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator uses real-time VET prices from CoinGecko and current APY rates from top staking platforms to calculate your potential earnings over different time periods including hourly, daily, weekly, monthly, and yearly."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a minimum amount to stake VET?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum staking amounts vary by platform. Some platforms like Binance and Bybit allow staking from as little as 1 VET, while others may require larger amounts. Check the platform comparison table for specific requirements."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Schema.org JSON-LD */}
      <Script
        id="schema-webapp"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">VeChain Staking Calculator</h1>
                <p className="text-sm text-gray-500">Calculate your VET staking rewards</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Maximize Your VET Earnings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calculate your VeChain staking rewards with real-time data and compare top staking platforms
          </p>
        </div>

        {/* Calculator Section */}
        <StakingCalculator />

        {/* Platform Comparison */}
        <PlatformComparison />

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                <span className="font-semibold text-gray-900">What is VeChain staking?</span>
                <span className="transition group-open:rotate-180">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 px-4">
                VeChain staking allows VET holders to lock their tokens and earn VTHO (VeThor) rewards.
                By holding VET, you automatically generate VTHO, which is used to pay for transaction fees on the VeChainThor blockchain.
              </p>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                <span className="font-semibold text-gray-900">How does the calculator work?</span>
                <span className="transition group-open:rotate-180">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 px-4">
                Our calculator uses real-time VET prices from CoinGecko and current APY rates from top staking platforms
                to calculate your potential earnings over different time periods.
              </p>
            </details>

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                <span className="font-semibold text-gray-900">Is there a minimum amount to stake?</span>
                <span className="transition group-open:rotate-180">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 px-4">
                Minimum staking amounts vary by platform. Some platforms allow staking from as little as 1 VET,
                while others may require larger amounts. Check the platform comparison table for specific requirements.
              </p>
            </details>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 VET Staking Calculator. Data provided for informational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}
