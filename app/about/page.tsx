import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | VET Staking Calculator",
  description: "Learn about VET Staking Calculator - your trusted tool for calculating VeChain staking rewards with real-time data.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">VeChain Staking Calculator</h1>
                  <p className="text-sm text-gray-500">About Us</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About VET Staking Calculator</h2>

          <div className="space-y-8">
            {/* Mission */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                VET Staking Calculator is a free, easy-to-use tool designed to help VeChain (VET) holders make informed
                decisions about staking their tokens. Our mission is to provide accurate, real-time calculations and
                transparent comparisons of staking platforms to help you maximize your earnings.
              </p>
            </section>

            {/* What We Offer */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Calculations</h4>
                  <p className="text-gray-600 text-sm">
                    Get instant staking reward estimates based on current VET prices from CoinGecko API and verified APY rates.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6">
                  <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Platform Comparison</h4>
                  <p className="text-gray-600 text-sm">
                    Compare top VET staking platforms including Binance, VeChain StarGate, and Bybit with detailed features and ratings.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">100% Free</h4>
                  <p className="text-gray-600 text-sm">
                    Our calculator is completely free to use with no hidden fees, registration, or signup required.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Privacy Focused</h4>
                  <p className="text-gray-600 text-sm">
                    All calculations are performed locally in your browser. We do not store or collect your VET amounts or calculation data.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Trust Us */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Trust Us</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Verified Data Sources:</strong> We use official data from Binance.com, VeChain.org, and Stakingrewards.com
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Real-Time Prices:</strong> VET prices are fetched directly from CoinGecko API and updated every 60 seconds
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Regular Updates:</strong> APY rates are verified and updated regularly (last update: December 2025)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Transparent Methodology:</strong> All calculations are based on standard APY formulas with full transparency
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Disclaimer */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Important Disclaimer</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-yellow-800 mb-3">
                  VET Staking Calculator is an independent tool and is not affiliated with VeChain Foundation, Binance,
                  Bybit, or any other staking platform mentioned on this website.
                </p>
                <p className="text-yellow-800">
                  All calculations are estimates based on current data and are subject to change. APY rates, platform terms,
                  and VET prices fluctuate. Always verify current rates on the official platform website before making any
                  staking decisions. This tool is for informational purposes only and should not be considered financial advice.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Have questions, suggestions, or feedback? We'd love to hear from you!
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
              >
                Contact Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-500 text-sm">
              © 2025 VET Staking Calculator. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/" className="text-gray-500 hover:text-gray-700 text-sm">Home</a>
              <a href="/privacy-policy" className="text-gray-500 hover:text-gray-700 text-sm">Privacy</a>
              <a href="/about" className="text-gray-500 hover:text-gray-700 text-sm">About</a>
              <a href="/contact" className="text-gray-500 hover:text-gray-700 text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
