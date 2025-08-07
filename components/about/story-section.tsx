import Image from 'next/image';

export default function StorySection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="/images/happy-masculine-soldier-man-military-and-looking-a-2025-02-14-12-48-17-utc Medium.jpeg"
                alt="Veteran founder"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-900 p-6 rounded-lg shadow-xl">
              <p className="text-2xl font-bold text-white">EST. 2024</p>
              <p className="text-sm font-semibold text-white">VETERAN OWNED</p>
            </div>
          </div>

          {/* Right - Story Content */}
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-900">Our Story</p>
              <h2 className="text-4xl font-bold uppercase text-neutral-900 dark:text-white">
                From Service to Purpose
              </h2>
            </div>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <p className="text-lg leading-relaxed">
                Founded by veterans who understand the unique challenges of transitioning from military 
                to civilian life, Military Resilience Clothing Co was born from a simple belief: 
                the strength forged in service doesn't end when the uniform comes off.
              </p>

              <p className="leading-relaxed">
                After serving multiple deployments and witnessing firsthand the mental health challenges 
                facing our military community, our founders recognized a gap — not just in support services, 
                but in daily reminders of the resilience we all possess.
              </p>

              <p className="leading-relaxed">
                Every piece of clothing we create carries the message of <strong>"PUSH FORWARD"</strong> — 
                military terminology that means everything: fight through, take the advantage, complete your mission. 
                This isn't just about surviving; it's about thriving.
              </p>

              <blockquote className="border-l-4 border-blue-900 pl-6 italic">
                "In military combat, 'Push Forward' can mean the difference between success and failure. 
                In civilian life, it means drawing on the resilience you've built to overcome any challenge."
                <cite className="mt-2 block text-sm not-italic">— Founder, Military Resilience Co</cite>
              </blockquote>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-neutral-900 dark:text-white">100%</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Veteran Owned</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neutral-900 dark:text-white">50%</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Profits to Mental Health</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-neutral-900 dark:text-white">∞</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Lifetime Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}