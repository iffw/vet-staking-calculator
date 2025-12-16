'use client';

interface Platform {
  name: string;
  apy: string;
  minStake: string;
  lockPeriod: string;
  features: string[];
  rating: number;
  url: string;
}

export default function PlatformComparison() {
  const platforms: Platform[] = [
    {
      name: 'Binance',
      apy: '1.63%',
      minStake: '1 VET',
      lockPeriod: 'Flexible',
      features: ['Verified APY', 'Easy withdrawal', 'High liquidity', 'VTHO rewards'],
      rating: 4.8,
      url: 'https://www.binance.com/en/earn/VET',
    },
    {
      name: 'VeChain StarGate',
      apy: '1.5%+',
      minStake: '10,000 VET',
      lockPeriod: 'Tiered',
      features: ['Official program', '$15M bonus pool', 'Lower entry (10K VET)', 'VTHO generation'],
      rating: 4.9,
      url: 'https://www.vechain.org',
    },
    {
      name: 'Bybit Earn',
      apy: '~1.2%',
      minStake: '1 VET',
      lockPeriod: 'Flexible',
      features: ['Flexible staking', 'Daily rewards', 'Mobile app', 'Multiple earn products'],
      rating: 4.6,
      url: 'https://www.bybit.com/en/earn/',
    },
    {
      name: 'Base VTHO Generation',
      apy: '~0.5%',
      minStake: 'No minimum',
      lockPeriod: 'None',
      features: ['Automatic VTHO', 'Any wallet', 'Self-custody', 'No platform fees'],
      rating: 4.7,
      url: 'https://www.vechain.org',
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Compare Staking Platforms
        </h2>
        <p className="text-gray-600">
          Find the best platform for your VET staking needs
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Platform</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">APY</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Min. Stake</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Lock Period</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Features</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {platforms.map((platform, index) => (
                <tr
                  key={platform.name}
                  className={`hover:bg-gray-50 transition-colors ${
                    index === 0 ? 'bg-blue-50' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold text-gray-900">{platform.name}</div>
                        {index === 0 && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                            Best APY
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-lg font-bold text-green-600">{platform.apy}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-900">{platform.minStake}</td>
                  <td className="px-6 py-4 text-gray-900">{platform.lockPeriod}</td>
                  <td className="px-6 py-4">
                    <ul className="space-y-1">
                      {platform.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4">{renderStars(platform.rating)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {platforms.map((platform, index) => (
          <div
            key={platform.name}
            className={`bg-white rounded-xl shadow-lg p-6 ${
              index === 0 ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                {index === 0 && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                    Best APY
                  </span>
                )}
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">{platform.apy}</div>
                <div className="text-xs text-gray-500">APY</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-gray-500">Min. Stake</div>
                <div className="font-semibold text-gray-900">{platform.minStake}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Lock Period</div>
                <div className="font-semibold text-gray-900">{platform.lockPeriod}</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-2">Features</div>
              <ul className="space-y-1">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>{renderStars(platform.rating)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Information Notice */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex">
          <svg
            className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h4 className="text-sm font-semibold text-blue-900 mb-1">
              Important Information
            </h4>
            <p className="text-sm text-blue-800 mb-2">
              APY rates are subject to change. Always verify current rates on the platform's official website
              before staking. Consider factors like platform security, reputation, and your own investment goals.
            </p>
            <p className="text-xs text-blue-700 mt-2">
              <strong>Sources:</strong> Binance.com, VeChain.org, Bybit.com | <strong>Updated:</strong> Dec 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
