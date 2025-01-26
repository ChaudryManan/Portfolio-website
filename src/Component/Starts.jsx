import React from "react";

const Stats = () => {
  const stats = [
    { number: "1+", label: "YEARS OF EXPERIENCE" },
    { number: "10+", label: "PROJECTS COMPLETED" },
    { number: "15+", label: "HAPPY CLIENTS" },
  ];

  return (
    <div className="bg-black text-white py-8">
      <div className="flex  items-center max-w-4xl mr-5 mx-auto">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="text-center ">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text " >
                {stat.number}
              </h1>
              <p className="uppercase text-sm mt-2">{stat.label}</p>
            </div>
            {/* Divider between stats */}
            {index < stats.length - 1 && (
              <div className="w-px h-16 bg-gray-500 mx-6 md:mx-14"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stats;
