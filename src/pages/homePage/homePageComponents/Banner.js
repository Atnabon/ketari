import { TypeAnimation } from "react-type-animation";
import SearchComponent from "./SearchComponent";
import AnimatedImages from "./AnimatedImages";

const Banner = () => {
  return (
    <section id="banner" className="bg-[#f2f5fb] py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 container mx-auto px-5">
        {/*Banner info data start*/}
        <div className="col-span-1 md:col-span-2">
          <div className="mb-7 md:mb-5">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#242525] mb-3">
              Find Your Desire Job &
            </h1>
            {/*typing animation*/}
            <TypeAnimation
              sequence={["Make a Better Life.", 1000, ""]}
              speed={75} // Must be in range between 1 and 99!
              wrapper="h2"
              repeat={Infinity}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#fec557]  mb-3 md:mb-5 lg:mb-8"
            />
            <p className="font-bold text-[#758995]  md:text-base lg:text-base">
              Search for Jobs, Employment & Career Opportunities
            </p>
          </div>
          <div>
            <SearchComponent />
          </div>
          <div className="flex flex-wrap justify-start gap-2 mt-5">
            <p className="text-sm md:text-xl font-bold">
              Trending Jobs Keywords:
            </p>
            <p className="bg-[#fec557] p-1 text-white cursor-pointer rounded-lg text-sm">
              Software Engineer
            </p>
            <p className="bg-[#fec557] p-1 text-white cursor-pointer rounded-lg text-sm">
              UI/UX Designer
            </p>
            <p className="bg-[#fec557] p-1 text-white cursor-pointer rounded-lg text-sm">
              Marketing & Sales
            </p>
          </div>
        </div>

        <figure className="col-span-2 md:col-span-1 w-full">
          <AnimatedImages />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
