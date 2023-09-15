import React from "react";

const About = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto px-5">
        <div className="flex justify-start items-center sm:mb-5 ">
          <img src="/team.jpg" alt="about banner" className="w-full  h-auto" />
        </div>
        {/*........blog banner image end..........*/}

        <div className="flex justify-center items-center">
          <div>
            <p className="text-base md:text-xl lg:text-2xl font-bold text-primary mb-1 md:mb-3">
              About Our Company
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-accent mb-3 md:mb-5">
              Our expert job research team will help you to find a wonderful
              job. We create unique experiences.
            </h1>
            <p className="pb-4 text-accent">
              At our talent recruiter platform, we are dedicated to helping job
              seekers find wonderful opportunities and supporting employers in
              their search for the best talent. With our expert job research
              team, we create unique experiences by matching skills, expertise,
              and cultural fit to ensure successful placements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
