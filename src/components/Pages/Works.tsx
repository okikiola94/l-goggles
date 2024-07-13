import { useState } from "react";
import { FiLink } from "react-icons/fi";
import { projects } from "../Atoms/productcrumbs";

export const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleViewMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 2);
  };
  return (
    <section id="works" className=" text-start w-full ">
      <div className="">
        <h4 className="">Projects</h4>

        <div className="grid gap-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="border border-[#111111] bg-[#111111] opacity-85 p-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="projects-section flex flex-col cursor-pointer lg:h-[8rem]">
                  <div className="flex items-center gap-6">
                    <h3 className="text-xl font-semibold text-[#aeaeae] mb-2">
                      {project.topic}
                    </h3>
                    {project.status === "in-progress" && (
                      <span className="inline-block px-2 h-[1.5rem] border border-[#d9d9d9] text-center text-xs text-[#7c7c7c] bg-[#d9d9d9] rounded">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-[3rem]">
                    <div className="w-[85%]">
                    <p className="text-[#ffffff] text-sm text-pretty">
                      {project.description}
                    </p>
                    </div>
                    
                    <a href={project.link} className="text-[#fff] ">
                      <FiLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="bg-gradient-custom">
              <button
            onClick={handleViewMore}
            className=" text-left mt-8 py-2 px-9 border-2 border-[#737373]  rounded-3xl text-base"
          >
            View More
          </button>
          </div>
        
        )}
      </div>
    </section>
  );
};
