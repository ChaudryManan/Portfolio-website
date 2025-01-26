import React, { useEffect, useState } from "react";

const SkillBar = ({ name, progress }) => {
  const [count, setCount] = useState(0);

  // Count-up animation for the percentage
  useEffect(() => {
    let start = 0;
    const numericProgress = parseInt(progress, 10); // Convert "80%" to 80
    const duration = 3000; // 2 seconds
    const increment = Math.ceil(numericProgress / (duration / 20)); // Increment per frame
    const interval = setInterval(() => {
      start += increment;
      if (start >= numericProgress) {
        setCount(numericProgress);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="md:-mb-2 -mb-4  w-80"> {/* Reduced gap here */}
      {/* Skill Name and Progress Bar */}
      <div className="flex items-center  md:w-[500px]">
        <span className="w-1/3 md:w-1/4 text-lg">{name}</span>
        <div className="w-4/6 bg-gray-700 h-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
            style={{
              width: progress,
              animation: "fill 2s ease-in-out",
            }}
          ></div>
        </div>
      </div>

      {/* Percentage Counter Below Bar */}
      <div className="text-right text-sm text-pink-500 md:-mt-1 ">
        {count}%
      </div>

      {/* Keyframes for the Bar Animation */}
      <style>
        {`
          @keyframes fill {
            from {
              width: 0;
            }
            to {
              width: ${progress};
            }
          }
        `}
      </style>
    </div>
  );
};

const SkillProgress = () => {
  const skills = [
    { name: "HTML & CSS", progress: "90%" },
    { name: "JavaScript", progress: "70%" },
    { name: "React JS", progress: "80%" },
    { name: "Node JS", progress: "60%" },
  ];

  return (
    <div className="text-white md:h-64 h-48 flex  items-center">
      <div className="w-11/12 max-w-lg">
        {skills.map((skill, index) => (
          <SkillBar  key={index} name={skill.name} progress={skill.progress} />
        ))}
      </div>
    </div>
  );
};

export default SkillProgress;
