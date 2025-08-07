import Image from 'next/image';

const team = [
  {
    name: 'John Mitchell',
    role: 'Founder & CEO',
    service: 'Australian Army - 12 Years',
    image: '/images/happy-masculine-soldier-man-military-and-looking-a-2025-02-16-04-13-45-utc Medium.jpeg',
    bio: 'Served multiple deployments in Afghanistan. Founded Military Resilience to support veteran mental health.'
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Operations',
    service: 'RAAF - 8 Years',
    image: '/images/caucasian-teenage-girl-with-long-blond-hair-posing-2025-03-08-17-45-41-utc Medium.jpeg',
    bio: 'Operations specialist with a passion for veteran support and community building.'
  },
  {
    name: 'Marcus Williams',
    role: 'Community Outreach',
    service: 'Royal Australian Navy - 10 Years',
    image: '/images/young-african-american-soldier-in-military-uniform-2024-11-12-05-55-31-utc Medium.jpeg',
    bio: 'Dedicated to connecting veterans with mental health resources and building support networks.'
  }
];

export default function TeamSection() {
  return (
    <section className="bg-neutral-100 py-20 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-900">
            The People Behind the Mission
          </p>
          <h2 className="text-4xl font-bold uppercase text-neutral-900 dark:text-white">
            Our Team
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Veterans continuing to serve through a new mission
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg transition-all hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-950"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Service Badge */}
                <div className="absolute bottom-4 left-4 rounded bg-blue-900 px-3 py-1">
                  <p className="text-xs font-bold text-white">{member.service}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold text-neutral-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-900">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-12 rounded-lg bg-blue-900 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-white">Join Our Mission</h3>
          <p className="mb-6 text-white">
            We're always looking for passionate individuals who share our commitment to supporting 
            the veteran community.
          </p>
          <button className="border-2 border-white bg-white px-8 py-3 font-semibold uppercase tracking-wider text-blue-900 transition-all hover:bg-transparent hover:text-white">
            Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}