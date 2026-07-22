import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'services', label: 'Services' },
  { id: 'industries', label: 'Industries' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'insights', label: 'Insights' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionDots() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-4"
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-3 focus-visible:outline-none"
            aria-label={`Go to ${label} section`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span
              className={`text-[10px] font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'opacity-100 text-[#0057B8] translate-x-0'
                  : 'opacity-0 translate-x-2 text-gray-400 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0'
              }`}
            >
              {label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ring-offset-2 group-focus-visible:ring-2 group-focus-visible:ring-[#0057B8] ${
                isActive ? 'w-2.5 h-2.5 bg-[#0057B8]' : 'w-1.5 h-1.5 bg-gray-300 group-hover:bg-[#0057B8]/60'
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
