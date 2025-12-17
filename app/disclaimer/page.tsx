import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | VET Staking Calculator",
  description: "Important disclaimer and terms of use for VET Staking Calculator. Read before using our staking calculator tool.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Disclaimer() {
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
                  <p className="text-sm text-gray-500">Disclaimer</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h2>
          <p className="text-sm text-gray-500 mb-8">Last Updated: December 17, 2025</p>

          <div className="prose prose-blue max-w-none space-y-6">
            {/* Warning Box */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800">
                    Important Notice
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Please read this disclaimer carefully before using VET Staking Calculator. By using this website,
                      you acknowledge and agree to all terms and conditions outlined below.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Not Financial Advice</h3>
              <p className="text-gray-600 leading-relaxed">
                The information provided on VET Staking Calculator is for <strong>informational and educational purposes only</strong>
                and does not constitute financial, investment, tax, or legal advice. We are not financial advisors, and nothing
                on this website should be interpreted as a recommendation to buy, sell, or hold any cryptocurrency or to engage
                in any specific staking platform.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                You should consult with qualified financial, tax, and legal professionals before making any investment decisions.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Accuracy of Information</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                While we strive to provide accurate and up-to-date information, we make no representations or warranties
                of any kind regarding:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>The accuracy, completeness, or reliability of any information</li>
                <li>The current APY rates from staking platforms</li>
                <li>VET price data from third-party APIs (CoinGecko)</li>
                <li>Platform terms, conditions, or availability</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                <strong>APY rates are estimates</strong> based on data available at the time of our last update and
                are subject to change without notice. Always verify current rates on the official platform website
                before staking.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Calculation Estimates Only</h3>
              <p className="text-gray-600 leading-relaxed">
                All calculations provided by our calculator are <strong>estimates</strong> based on:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Current VET price at the time of calculation</li>
                <li>APY rates from various sources</li>
                <li>Standard compound interest formulas</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Actual staking rewards may vary significantly due to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Market volatility and price fluctuations</li>
                <li>Changes in APY rates</li>
                <li>Platform fees and conditions</li>
                <li>Network conditions</li>
                <li>Lock-up periods and withdrawal restrictions</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Investment Risks</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Cryptocurrency staking involves significant risks, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li><strong>Market Risk:</strong> Cryptocurrency prices are highly volatile</li>
                <li><strong>Platform Risk:</strong> Staking platforms may be hacked, shut down, or become insolvent</li>
                <li><strong>Regulatory Risk:</strong> Cryptocurrency regulations may change</li>
                <li><strong>Liquidity Risk:</strong> You may not be able to withdraw your funds immediately</li>
                <li><strong>Smart Contract Risk:</strong> Smart contracts may contain bugs or vulnerabilities</li>
                <li><strong>Opportunity Cost:</strong> Locked funds cannot be used for other investments</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                <strong>You may lose some or all of your investment.</strong> Never invest more than you can afford to lose.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. No Affiliation</h3>
              <p className="text-gray-600 leading-relaxed">
                VET Staking Calculator is an independent tool and is <strong>not affiliated with, endorsed by, or
                officially connected with</strong>:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>VeChain Foundation</li>
                <li>Binance</li>
                <li>Bybit</li>
                <li>CoinGecko</li>
                <li>Any other staking platform or service mentioned on this website</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Any references to third-party platforms are for informational purposes only.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Third-Party Links</h3>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>The content, accuracy, or practices of third-party websites</li>
                <li>Any losses or damages incurred from using third-party services</li>
                <li>The security or privacy practices of third parties</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                You access third-party websites at your own risk and should review their terms and privacy policies.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7. No Guarantee of Results</h3>
              <p className="text-gray-600 leading-relaxed">
                We do not guarantee any specific results, earnings, or profits from using our calculator or
                following any information on this website. Past performance is not indicative of future results.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Limitation of Liability</h3>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, VET Staking Calculator and its operators shall not be
                liable for any:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>Direct, indirect, incidental, or consequential damages</li>
                <li>Loss of profits, revenue, or data</li>
                <li>Investment losses</li>
                <li>Errors or omissions in the content</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                arising from your use of this website or reliance on any information provided.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Use at Your Own Risk</h3>
              <p className="text-gray-600 leading-relaxed">
                By using VET Staking Calculator, you acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>You are using the website at your own risk</li>
                <li>You are responsible for conducting your own research</li>
                <li>You understand the risks associated with cryptocurrency staking</li>
                <li>You will verify all information independently before making any decisions</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Updates and Changes</h3>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify, update, or remove any content on this website at any time without
                prior notice. We are not obligated to update information, even if it becomes outdated or inaccurate.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Data Sources</h3>
              <p className="text-gray-600 leading-relaxed">
                Our data comes from various sources including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                <li>CoinGecko API (real-time VET price)</li>
                <li>Official platform websites (APY rates)</li>
                <li>Public staking information sources</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                We cannot guarantee the accuracy or reliability of data from these sources.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">12. Contact</h3>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about this disclaimer, please
                <a href="/contact" className="text-blue-600 hover:underline ml-1">contact us</a>.
              </p>
            </section>

            {/* Final Notice */}
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-red-800">
                    Final Reminder
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p className="font-semibold">
                      By using this website, you acknowledge that you have read, understood, and agreed to this disclaimer.
                      If you do not agree with any part of this disclaimer, please do not use this website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
              <a href="/disclaimer" className="text-gray-500 hover:text-gray-700 text-sm">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
