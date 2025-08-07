import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function AboutHeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/smart-teamwork-of-soldiers-running-forward-and-att-2024-10-11-00-04-33-utc Medium.jpeg"
          alt="Military team in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="mb-6 text-5xl font-bold uppercase tracking-tight md:text-7xl">
          Forged in Service
          <span className="block text-blue-900">Built on Resilience</span>
        </h1>
        
        <p className="mb-8 max-w-2xl text-lg md:text-xl">
          Military Resilience exists to honour the unbreakable spirit forged in service. 
          We are a movement with a cause — spreading the message that resilience is real, 
          help is available, and life's challenges can be overcome.
        </p>

        <div className="flex gap-4">
          <button className="border-2 border-white px-8 py-3 font-semibold uppercase tracking-wider transition-all hover:bg-white hover:text-black">
            Our Mission
          </button>
          <button className="bg-blue-900 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-800">
            Shop Collection
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}