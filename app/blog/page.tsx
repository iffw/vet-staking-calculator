import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VeChain Staking Blog | VET Staking Guides & Tutorials",
  description: "Learn everything about VeChain (VET) staking with our comprehensive guides, tutorials, and analysis. Maximize your VET staking rewards.",
  keywords: [
    "VeChain blog",
    "VET staking guide",
    "VeChain tutorial",
    "VET staking tips",
    "cryptocurrency staking",
    "VeChain education"
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const blogPosts = [
  {
    slug: "vechain-staking-guide",
    title: "The Complete Guide to VeChain (VET) Staking in 2025",
    description: "Everything you need to know about staking VET tokens, from basic concepts to advanced strategies. Learn how to maximize your staking rewards.",
    category: "Guide",
    readTime: "8 min read",
    date: "December 17, 2025",
    featured: true,
  },
  {
    slug: "binance-vet-staking-tutorial",
    title: "How to Stake VET on Binance: Step-by-Step Tutorial",
    description: "A detailed walkthrough of staking VET tokens on Binance, the platform offering the highest APY rates. Includes screenshots and best practices.",
    category: "Tutorial",
    readTime: "6 min read",
    date: "December 17, 2025",
    featured: true,
  },
  {
    slug: "vechain-ecosystem",
    title: "Understanding the VeChain Ecosystem and VTHO Generation",
    description: "Explore VeChain's dual-token system, real-world applications, and how VTHO generation works. Learn why VeChain is unique in the blockchain space.",
    category: "Education",
    readTime: "7 min read",
    date: "December 17, 2025",
    featured: false,
  },
  {
    slug: "vet-staking-rewards-2025",
    title: "VET Staking Rewards Analysis: 2025 Platform Comparison",
    description: "Compare staking rewards across major platforms including Binance, VeChain StarGate, and Bybit. Data-driven analysis with real numbers.",
    category: "Analysis",
    readTime: "5 min read",
    date: "December 17, 2025",
    featured: true,
  },
  {
    slug: "vet-staking-faq",
    title: "VET Staking FAQ: Common Questions Answered",
    description: "Get answers to the most frequently asked questions about VeChain staking, from minimum amounts to tax implications.",
    category: "FAQ",
    readTime: "4 min read",
    date: "December 17, 2025",
    featured: false,
  },
];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">VeChain Staking Blog</h1>
                  <p className="text-sm text-gray-500">Guides, Tutorials & Analysis</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Learn VeChain Staking
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert guides and tutorials to help you maximize your VET staking rewards
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-48 flex items-center justify-center">
                  <span className="text-white text-6xl">📚</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="text-blue-600 group-hover:text-blue-700 font-medium">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h3>
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      {post.featured && (
                        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-3">
                      {post.description}
                    </p>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <div className="ml-6 flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Staking?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Use our calculator to estimate your VET staking rewards and compare platforms
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Try the Calculator
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center text-gray-500 text-sm">
              © 2025 VET Staking Calculator. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Home</Link>
              <Link href="/blog" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Blog</Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">About</Link>
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Privacy Policy</Link>
              <Link href="/disclaimer" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Disclaimer</Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
