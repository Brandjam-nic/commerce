import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function PartnershipsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-yellow-500">
            Making a Difference Together
          </p>
          <h2 className="text-4xl font-bold uppercase text-neutral-900 dark:text-white">
            Partnerships & Support
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Partnering with organizations that share our commitment to veteran mental health
          </p>
        </div>

        {/* Featured Partnership - TIACS */}
        <div className="mb-12 overflow-hidden rounded-lg bg-gradient-to-r from-green-400 to-green-500 p-8 text-black shadow-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="mb-4 text-3xl font-bold">TIACS Partnership</h3>
              <p className="mb-4 text-lg">
                <strong>50% of our profits</strong> go directly to TIACS (This Is A Conversation Starter), 
                providing free mental health support to veterans, first responders, and blue-collar workers.
              </p>
              <p className="mb-6">
                TIACS offers free text, chat, and call-back services staffed by professional mental 
                health clinicians. Every purchase you make helps fund these vital services.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 rounded bg-black px-6 py-3 font-semibold text-white transition-all hover:bg-gray-800">
                  Learn More <ExternalLink className="h-4 w-4" />
                </button>
                <div className="flex items-center rounded bg-white/20 px-6 py-3 backdrop-blur">
                  <span className="font-semibold">Open 8am - 10pm AEST Mon-Fri</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-32 w-32 rounded-full bg-white p-8">
                <Image
                  src="/logos/IconBlack.png"
                  alt="TIACS"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Partnerships */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 bg-white p-6 text-center shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
            <div className="mb-4 flex h-20 items-center justify-center">
              <p className="text-2xl font-bold text-neutral-400">Partner Logo</p>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
              Veteran Support Groups
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Working with local RSLs and veteran organizations to provide direct support.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-6 text-center shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
            <div className="mb-4 flex h-20 items-center justify-center">
              <p className="text-2xl font-bold text-neutral-400">Partner Logo</p>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
              Mental Health Services
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Collaborating with professional mental health providers for veteran care.
            </p>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-6 text-center shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
            <div className="mb-4 flex h-20 items-center justify-center">
              <p className="text-2xl font-bold text-neutral-400">Partner Logo</p>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
              Community Initiatives
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Supporting local communities through events and awareness campaigns.
            </p>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-12 rounded-lg bg-neutral-900 p-8 text-center text-white dark:bg-white dark:text-black">
          <h3 className="mb-4 text-2xl font-bold">Your Purchase Makes a Difference</h3>
          <p className="mb-6 text-lg">
            Every item you buy contributes to mental health support for those who need it most. 
            Together, we're building a community where no one fights alone.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div>
              <p className="text-3xl font-bold text-yellow-400">1000+</p>
              <p className="text-sm">Hours of Support Funded</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">500+</p>
              <p className="text-sm">Veterans Helped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">24/7</p>
              <p className="text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}