import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | VET Staking Calculator",
  description: "Privacy policy for VET Staking Calculator. Learn how we collect, use, and protect your information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
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
                  <p className="text-sm text-gray-500">Privacy Policy</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
          <p className="text-sm text-gray-500 mb-8">Last Updated: December 17, 2025</p>

          <div className="prose prose-blue max-w-none space-y-6">
            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h3>
              <p className="text-gray-600 leading-relaxed">
                Welcome to VET Staking Calculator ("we," "our," or "us"). We are committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
                our website at vet-staking-calculator.vercel.app.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h3>

              <h4 className="text-lg font-medium text-gray-800 mb-2 mt-4">2.1 Automatically Collected Information</h4>
              <p className="text-gray-600 leading-relaxed mb-2">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>

              <h4 className="text-lg font-medium text-gray-800 mb-2 mt-4">2.2 Calculator Usage Data</h4>
              <p className="text-gray-600 leading-relaxed">
                The VET amounts and calculations you perform on our calculator are processed locally in your browser
                and are NOT stored on our servers. We do not collect or store your calculation data.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Cookies and Tracking Technologies</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                We use cookies and similar tracking technologies to enhance your experience on our website:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Advertising Cookies:</strong> Used to display relevant advertisements (Google AdSense)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h3>

              <h4 className="text-lg font-medium text-gray-800 mb-2 mt-4">4.1 Google AdSense</h4>
              <p className="text-gray-600 leading-relaxed">
                We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your
                prior visits to our website or other websites. You can opt out of personalized advertising by visiting
                <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  Google Ads Settings
                </a>.
              </p>

              <h4 className="text-lg font-medium text-gray-800 mb-2 mt-4">4.2 CoinGecko API</h4>
              <p className="text-gray-600 leading-relaxed">
                We use CoinGecko API to fetch real-time VET price data. Please refer to
                <a href="https://www.coingecko.com/en/privacy" className="text-blue-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">
                  CoinGecko's Privacy Policy
                </a>
                for information about their data practices.
              </p>

              <h4 className="text-lg font-medium text-gray-800 mb-2 mt-4">4.3 Google Analytics (if applicable)</h4>
              <p className="text-gray-600 leading-relaxed">
                We may use Google Analytics to analyze website traffic and usage patterns. Google Analytics uses cookies
                to collect anonymous information about your visit.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5. How We Use Your Information</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>To provide and maintain our service</li>
                <li>To improve and optimize our website</li>
                <li>To understand user behavior and preferences</li>
                <li>To display relevant advertisements</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Data Security</h3>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your information.
                However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to delete your data</li>
                <li>Right to restrict processing</li>
                <li>Right to object to processing</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Children's Privacy</h3>
              <p className="text-gray-600 leading-relaxed">
                Our service is not intended for children under 13 years of age. We do not knowingly collect
                personal information from children under 13.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to This Privacy Policy</h3>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Us</h3>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  Email: privacy@vet-staking-calculator.com
                </p>
                <p className="text-gray-700">
                  Website:
                  <a href="/contact" className="text-blue-600 hover:underline ml-1">
                    Contact Page
                  </a>
                </p>
              </div>
            </section>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This privacy policy is designed to comply with GDPR, CCPA, and other privacy regulations.
                It is required by Google AdSense and demonstrates our commitment to protecting your privacy.
              </p>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
