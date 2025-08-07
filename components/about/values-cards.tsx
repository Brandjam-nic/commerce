'use client';

import { Shield, Heart, Users, Award } from 'lucide-react';
import { useState } from 'react';

const values = [
  {
    icon: Shield,
    title: 'HONOR',
    description: 'We respect and honor those who serve, recognizing the sacrifices made for our freedom and security.',
    color: 'bg-red-500'
  },
  {
    icon: Heart,
    title: 'RESILIENCE',
    description: 'Built through adversity, our resilience defines us. We overcome challenges and push forward together.',
    color: 'bg-blue-500'
  },
  {
    icon: Users,
    title: 'COMMUNITY',
    description: 'No one fights alone. We support each other through thick and thin, creating bonds that last a lifetime.',
    color: 'bg-green-500'
  },
  {
    icon: Award,
    title: 'INTEGRITY',
    description: 'Quality in everything we do. From our products to our partnerships, we maintain the highest standards.',
    color: 'bg-purple-500'
  }
];

export default function ValuesCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-neutral-100 py-20 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-900">Our Foundation</p>
          <h2 className="text-4xl font-bold uppercase text-neutral-900 dark:text-white">
            Core Values
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-950"
              >
                {/* Background decoration */}
                <div
                  className={`absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-10 transition-transform duration-300 ${
                    value.color
                  } ${hoveredIndex === index ? 'scale-150' : 'scale-100'}`}
                />

                {/* Icon */}
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                    value.color
                  } text-white`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {value.description}
                </p>

                {/* Hover effect line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full transform transition-transform duration-300 ${
                    value.color
                  } ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}