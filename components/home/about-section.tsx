'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'about' | 'mission'>('about');

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Left side - Image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900">
          <Image
            src="/images/ShirtManTest.png"
            alt="About Military Resilience Co"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col">
          {/* Tab navigation */}
          <div className="mb-8 flex gap-8 border-b border-neutral-200 dark:border-neutral-800">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                activeTab === 'about'
                  ? 'border-b-2 border-yellow-500 text-neutral-900 dark:text-white'
                  : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`pb-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                activeTab === 'mission'
                  ? 'border-b-2 border-yellow-500 text-neutral-900 dark:text-white'
                  : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
              }`}
            >
              Our Mission
            </button>
          </div>

          {/* Tab content */}
          <div className="space-y-6">
            {activeTab === 'about' ? (
              <>
                <h2 className="text-4xl font-bold uppercase tracking-tight text-neutral-900 dark:text-white">
                  About Us
                </h2>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                  Military Resilience Co was founded by veterans who understand the unique challenges 
                  of transitioning from military to civilian life. Our mission is to provide high-quality 
                  apparel while supporting mental health initiatives for veterans and first responders.
                </p>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                  Every product is designed with purpose and manufactured with care in Vietnam, 
                  supporting local communities while maintaining the highest quality standards.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-neutral-900 px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  Learn More
                </Link>
              </>
            ) : (
              <>
                <h2 className="text-4xl font-bold uppercase tracking-tight text-neutral-900 dark:text-white">
                  Our Mission
                </h2>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                  Every purchase goes towards making a social impact by funding{' '}
                  <span className="font-semibold">TIACS</span>, a free mental health support service. 
                  We donate 50% of the profits from every shirt sold to TIACS.
                </p>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                  TIACS (This Is A Conversation Starter) provides professional mental health support 
                  to blue-collar workers, tradies, and those in high-risk industries. Your purchase 
                  directly contributes to providing free counselling sessions for those who need it most.
                </p>
                <Link
                  href="/about#mission"
                  className="inline-block bg-neutral-900 px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  Learn More
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}