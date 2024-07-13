import "./pages.css";
export const Home = () => {
  return (
    <section id="hero">
      <div className="text-start ">
        <h4 className="text-[#d9d9d9] sm:text-[1rem] md:text-[1.7rem] font-semibold lg:text-[2rem]">
          Code. Innovate. Transform.
        </h4>
        <span className="text-[#a6a6a6]  text-[1.2rem] lg:text-[2rem]">Make technology work for you. </span>
      </div>
      <div className="text-start w-full">
        <p className="text-[#d9d9d9] text-sm text-pretty">
          In the ever-evolving landscape of technology, I strive to stay at the
          forefront, crafting software that not only meets the needs of today
          but anticipates the challenges of tomorrow one code build at a time. Presently a frontend engineer at Bottify!
        </p>
      </div>

      {/* <section
          id="hero"
          className="min-h-[92vh] flex flex-col items-center justify-center text-center"
        >
          <div className="font-bold flex flex-col space-y-[-1rem] lg:space-y-[-3rem]">
            <ul className="mb-4 ml-3 text-xs">
              <li className="uppercase font-extralight text-left list-disc text-[#848484]">
                Built by Kiki
              </li>
            </ul>
            <div className="flex flex-col justify-center text-[#a6a6a6]">
              <h1 className="scroll-m-20 text-left m-0 p-0 hero-text animate-hero-text">
                BUILDING
              </h1>
              <h1 className="text-right m-0 p-0 hero-text animate-hero-text-right ml-[4rem] md:ml-0">
                LEARNING
              </h1>
              <h1 className="text-left m-0 p-0 hero-text animate-hero-text">
                EVOLVING
              </h1>
            </div>
            <span className="pt-[2.5rem]">
              <a
                href="#works"
                className="max-w-[12rem] btn-hoverr p-3 flex text-left gap-3 text-base underline mt-6 uppercase"
              >
                View Projects
              </a>
            </span>
          </div>
          <div className="flex justify-center items-start w-full"></div>
        </section> */}
    </section>
  );
};
