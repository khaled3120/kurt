import React, { useState } from 'react';

type CountryCode = 'US' | 'CA' | 'UK' | 'AU';

interface CountryInfo {
  code: CountryCode;
  name: string;
  amountText: string;
}

const COUNTRIES: Record<CountryCode, CountryInfo> = {
  US: { code: 'US', name: 'United States', amountText: '$750' },
  CA: { code: 'CA', name: 'Canada', amountText: '$1,000' },
  UK: { code: 'UK', name: 'United Kingdom', amountText: '£600' },
  AU: { code: 'AU', name: 'Australia', amountText: '$1,100' },
};

const AVAILABILITY_COUNTRIES = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
];

export default function App() {
  const [isClaimPage, setIsClaimPage] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#f3f3f5] flex flex-col items-center justify-start antialiased font-sans">
      {/* Top Banner matched to Kurt Geiger's monochrome palette */}
      <div className="w-full bg-black text-white text-center py-2.5 px-4 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xs select-none">
        4700+ People Already Claimed
      </div>

      <div className="flex-1 w-full flex items-center justify-center p-3 sm:p-6 my-auto">
        {!isClaimPage ? (
          /* Main Replica Card */
          <div className="w-full max-w-[440px] bg-white rounded-[24px] border border-gray-200/90 shadow-sm p-5 sm:p-7 transition-all my-auto">
            {/* Top Header Bar */}
            <div className="flex items-center justify-between pb-3.5 border-b border-gray-200/80">
              <div className="font-bodoni text-xs sm:text-sm font-bold tracking-[0.22em] text-black uppercase select-none">
                K U R T &nbsp; G E I G E R
              </div>
              <div className="border border-gray-300 px-3 py-1 rounded-full text-[11px] font-medium text-gray-800 bg-white shadow-2xs whitespace-nowrap">
                Member Rewards
              </div>
            </div>

            {/* Hero Section */}
            <div className="text-center pt-5 pb-2">
              <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-0.5">
                UP TO
              </div>

              <div className="text-6xl sm:text-7xl font-normal font-serif-luxury text-black tracking-tight leading-none mb-1 select-none">
                $750
              </div>

              <div className="text-2xl sm:text-[28px] font-bold font-bodoni text-black mb-3 tracking-wide">
                Kurt Geiger
              </div>

              <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed max-w-[270px] mx-auto">
                Complete a quick registration to unlock your Kurt Geiger gift card.
              </p>
            </div>

            {/* How to Claim Subheader */}
            <div className="mt-5 mb-2.5 text-center">
              <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                HOW TO CLAIM
              </div>
            </div>

            {/* Step Box */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-200 bg-white mb-5">
              {/* Step 1 */}
              <div className="p-3.5 flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center font-bold text-xs text-black shrink-0">
                  1
                </div>
                <div className="font-bold text-black text-sm leading-tight">
                  Click the button below
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-3.5 flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center font-bold text-xs text-black shrink-0">
                  2
                </div>
                <div className="font-bold text-black text-sm leading-tight">
                  Enter your basic info
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-3.5 flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center font-bold text-xs text-black shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <div className="font-bold text-black text-sm leading-tight">
                    Complete required offers
                  </div>
                  <div className="text-[11px] text-gray-500 font-normal mt-0.5 leading-snug">
                    Finish 4+ simple offers to unlock your full reward.
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-3.5 flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center font-bold text-xs text-black shrink-0">
                  4
                </div>
                <div className="font-bold text-black text-sm leading-tight">
                  Claim your Kurt Geiger gift card
                </div>
              </div>
            </div>

            {/* Claim CTA Button - Redirects in same window */}
            <a
              href="https://trksy.org/aff_c?offer_id=4683&aff_id=144760"
              className="w-full bg-black text-white py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-gray-800 active:scale-[0.98] transition shadow-md cursor-pointer touch-manipulation text-center block"
            >
              Claim Your Reward
            </a>

            {/* Subtext */}
            <div className="text-center text-xs text-gray-500 font-normal mt-2.5 mb-5">
              Takes only a few minutes
            </div>

            {/* Availability Section - Static Informational Display Only */}
            <div className="pt-4 border-t border-gray-200/80 text-center select-none">
              <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-3">
                AVAILABILITY
              </div>

              {/* Static 2x2 Info Grid */}
              <div className="grid grid-cols-2 gap-2">
                {AVAILABILITY_COUNTRIES.map((countryName) => (
                  <div
                    key={countryName}
                    className="border border-gray-200 bg-white text-gray-900 py-2.5 px-3 rounded-full text-xs font-semibold text-center whitespace-nowrap"
                  >
                    {countryName}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Claim Process Page */
          <div className="w-full max-w-[440px] bg-white rounded-[24px] border border-gray-200/90 shadow-sm p-5 sm:p-7 transition-all my-auto text-left">
            <button
              onClick={() => setIsClaimPage(false)}
              className="text-xs font-bold text-gray-500 hover:text-black mb-4 flex items-center gap-1 cursor-pointer"
            >
              ← Back
            </button>

            <div className="text-center mb-6">
              <div className="font-bodoni text-xs font-bold tracking-[0.22em] text-black uppercase mb-1">
                K U R T &nbsp; G E I G E R
              </div>
              <h2 className="text-xl font-bold text-black font-bodoni">
                Claim Your $750 Gift Card
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Enter your details to generate your reward code
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-black font-bodoni mb-2">
                  Request Received
                </h3>
                <p className="text-xs text-gray-600 mb-6">
                  Your entry has been processed. Thank you for participating.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setIsClaimPage(false);
                  }}
                  className="w-full bg-black text-white py-3 rounded-full font-bold text-xs hover:bg-gray-800 transition cursor-pointer"
                >
                  Return to Home
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = 'https://trksy.org/aff_c?offer_id=4683&aff_id=144760';
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-black outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-black outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Region
                  </label>
                  <input
                    type="text"
                    readOnly
                    value="United States ($750)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-800 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3.5 rounded-full font-bold text-sm hover:bg-gray-800 transition cursor-pointer mt-2"
                >
                  Continue to Final Steps →
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
