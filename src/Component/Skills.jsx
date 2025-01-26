import React, { useEffect, useRef } from 'react';

function Skills() {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.5 }
    );

    // Ensure refs are assigned correctly and only observe valid elements
    skillRefs.current.forEach((ref) => {
      if (ref && ref instanceof Element) {
        observer.observe(ref);
      }
    });

    return () => {
      // Cleanup: unobserve only valid elements that are still part of the DOM
      skillRefs.current.forEach((ref) => {
        if (ref && ref instanceof Element) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="w-10/12 mx-auto mt-16">
      <h1 className="text-center text-4xl my-8 -mt-4 font-serif bg-custom-gradient text-transparent bg-clip-text">
        Skills I Have
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {[
          'HTML',
          'CSS',
          'JavaScript',
          'React JS',
          'Tailwind CSS',
          'Creativity',
        ].map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillRefs.current[index] = el)} // Set ref properly
            className="skill-item w-full md:w-96 max-w-[280px] md:max-w-full h-[280px] border flex items-center justify-center rounded-lg mx-auto hover:bg-beautiful-gradient hover:scale-95 transition-all duration-500 group"
          >
            <h2 className="text-3xl md:text-4xl bg-custom-gradient text-transparent bg-clip-text group-hover:bg-none group-hover:text-white transition-all">
              {skill}
            </h2>
          </div>
        ))}
      </div>

      {/* Inline CSS for animation */}
      <style jsx>{`
        .skill-item {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .skill-item.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

export default Skills;
