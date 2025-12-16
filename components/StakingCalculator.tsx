'use client';

import { useState, useEffect } from 'react';

interface EarningsBreakdown {
  hourly: number;
  daily: number;
  weekly: number;
  monthly: number;
  yearly: number;
}

export default function StakingCalculator() {
  const [vetAmount, setVetAmount] = useState<string>('10000');
  const [selectedAPY, setSelectedAPY] = useState<number>(1.63);
  const [vetPrice, setVetPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [earnings, setEarnings] = useState<EarningsBreakdown>({
    hourly: 0,
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0,
  });

  // APY options from different platforms (Updated with verified rates - Dec 2025)
  const apyOptions = [
    { platform: 'Binance', apy: 1.63, note: 'Verified' },
    { platform: 'VeChain StarGate', apy: 1.5, note: 'Official Program' },
    { platform: 'Bybit Earn', apy: 1.2, note: 'Estimated' },
    { platform: 'VeChainThor Wallet (Base VTHO)', apy: 0.5, note: 'Base Rate' },
    { platform: 'Custom', apy: 0, note: '' },
  ];

  // Fetch VET price from CoinGecko
  useEffect(() => {
    const fetchVETPrice = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=vechain&vs_currencies=usd'
        );
        const data = await response.json();
        setVetPrice(data.vechain.usd);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching VET price:', error);
        setLoading(false);
      }
    };

    fetchVETPrice();
    // Refresh price every 60 seconds
    const interval = setInterval(fetchVETPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  // Calculate earnings
  useEffect(() => {
    const amount = parseFloat(vetAmount) || 0;
    const apy = selectedAPY / 100;

    const yearlyVET = amount * apy;
    const monthlyVET = yearlyVET / 12;
    const weeklyVET = yearlyVET / 52;
    const dailyVET = yearlyVET / 365;
    const hourlyVET = yearlyVET / (365 * 24);

    setEarnings({
      hourly: hourlyVET,
      daily: dailyVET,
      weekly: weeklyVET,
      monthly: monthlyVET,
      yearly: yearlyVET,
    });
  }, [vetAmount, selectedAPY]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
  };

  const formatCurrency = (num: number) => {
    return num.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Calculate Your Earnings</h2>

      {/* Input Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* VET Amount Input */}
        <div>
          <label htmlFor="vetAmount" className="block text-sm font-medium text-gray-700 mb-2">
            VET Amount
          </label>
          <div className="relative">
            <input
              type="number"
              id="vetAmount"
              value={vetAmount}
              onChange={(e) => setVetAmount(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              placeholder="Enter VET amount"
              min="0"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
              VET
            </span>
          </div>
          {vetPrice && (
            <p className="mt-2 text-sm text-gray-600">
              ≈ {formatCurrency(parseFloat(vetAmount || '0') * vetPrice)}
            </p>
          )}
        </div>

        {/* APY Selection */}
        <div>
          <label htmlFor="apySelect" className="block text-sm font-medium text-gray-700 mb-2">
            Staking Platform
          </label>
          <select
            id="apySelect"
            value={selectedAPY}
            onChange={(e) => setSelectedAPY(parseFloat(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          >
            {apyOptions.map((option) => (
              <option key={option.platform} value={option.apy}>
                {option.platform} {option.apy > 0 ? `(${option.apy}% APY)` : ''} {option.note && `- ${option.note}`}
              </option>
            ))}
          </select>
          {selectedAPY === 0 && (
            <input
              type="number"
              placeholder="Enter custom APY %"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setSelectedAPY(parseFloat(e.target.value) || 0)}
              step="0.1"
              min="0"
            />
          )}
        </div>
      </div>

      {/* Current VET Price Display */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-8">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Current VET Price</span>
          {loading ? (
            <span className="text-gray-500">Loading...</span>
          ) : vetPrice ? (
            <span className="text-2xl font-bold text-blue-600">
              {formatCurrency(vetPrice)}
            </span>
          ) : (
            <span className="text-red-500">Failed to load</span>
          )}
        </div>
      </div>

      {/* Earnings Breakdown */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Estimated Earnings</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Hourly */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Hourly</div>
            <div className="text-xl font-bold text-gray-900">{formatNumber(earnings.hourly)} VET</div>
            {vetPrice && (
              <div className="text-sm text-gray-500 mt-1">
                {formatCurrency(earnings.hourly * vetPrice)}
              </div>
            )}
          </div>

          {/* Daily */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Daily</div>
            <div className="text-xl font-bold text-gray-900">{formatNumber(earnings.daily)} VET</div>
            {vetPrice && (
              <div className="text-sm text-gray-500 mt-1">
                {formatCurrency(earnings.daily * vetPrice)}
              </div>
            )}
          </div>

          {/* Weekly */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Weekly</div>
            <div className="text-xl font-bold text-gray-900">{formatNumber(earnings.weekly)} VET</div>
            {vetPrice && (
              <div className="text-sm text-gray-500 mt-1">
                {formatCurrency(earnings.weekly * vetPrice)}
              </div>
            )}
          </div>

          {/* Monthly */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-200">
            <div className="text-sm text-blue-700 font-medium mb-1">Monthly</div>
            <div className="text-xl font-bold text-blue-900">{formatNumber(earnings.monthly)} VET</div>
            {vetPrice && (
              <div className="text-sm text-blue-600 mt-1 font-medium">
                {formatCurrency(earnings.monthly * vetPrice)}
              </div>
            )}
          </div>

          {/* Yearly */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 border-2 border-indigo-200 sm:col-span-2 lg:col-span-2">
            <div className="text-sm text-indigo-700 font-medium mb-1">Yearly</div>
            <div className="text-2xl font-bold text-indigo-900">{formatNumber(earnings.yearly)} VET</div>
            {vetPrice && (
              <div className="text-base text-indigo-600 mt-1 font-medium">
                {formatCurrency(earnings.yearly * vetPrice)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800 mb-2">
          <strong>⚠️ Important Disclaimer:</strong> APY rates are estimates and subject to change.
          Always verify current rates on the platform's official website before staking.
        </p>
        <p className="text-xs text-yellow-700">
          <strong>Data Sources:</strong> Binance.com, VeChain.org, Stakingrewards.com |
          <strong> Last Updated:</strong> December 2025 |
          <strong> Base VTHO Rate:</strong> 0.000432 VTHO/VET/day
        </p>
      </div>
    </div>
  );
}
