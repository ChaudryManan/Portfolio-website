import React, { useEffect, useRef } from 'react';
import data from './Array';

const Projects = () => {
  const projectRefs = useRef([]);

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
    projectRefs.current.forEach((ref) => {
      if (ref && ref instanceof Element) {
        observer.observe(ref);
      }
    });

    return () => {
      // Cleanup: unobserve only valid elements that are still part of the DOM
      projectRefs.current.forEach((ref) => {
        if (ref && ref instanceof Element) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="w-8/12 mt-16 mx-auto">
      <h1 className="text-center text-4xl font-lato font-bold my-8 text-amber-500">
        My Latest Work
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-2 gap-7 gap-y-6 place-items-center">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)} // Set ref properly
            className="project-item w-64 h-96 bg-slate-600 rounded-xl flex flex-col justify-center items-center gap-3 p-4 hover:bg-slate-900 hover:scale-110 transition-all duration-500 ease-in-out lg:w-52 xl:w-64"
          >
            <h2 className="text-center text-2xl font-medium">{item.description}</h2>
            <img
              className="w-64 rounded-xl h-52 mx-auto"
              src={item.image}
              alt="Project"
            />
            <p className="text-center text-sm">{item.details}</p>
            <a
              className="text-center text-yellow-300 hover:text-yellow-400"
              href={item.a}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to open the project
            </a>
          </div>
        ))}
      </div>

      {/* Inline CSS for animation */}
      <style jsx>{`
        .project-item {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .project-item.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Projects;
