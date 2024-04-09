import React from "react";
import TeamCard from "./TeamCard";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 text-center py-20 px-10">
      <TeamCard
        image="/ayoub.jpg"
        name="Ayoub Bensalah"
        role="Founder"
        description="Ayoub is a software engineer, a graphic designer, and founder of PhoenixRise. Responsible for project management. "
      />
      <TeamCard
        image="/houda.jpg"
        name="Houda Boussaid"
        role="Co-Founder"
        description="Houda is a frontend engineer and co-founder of PhoenixRise. Responsible for communication and sales."
      />
    </div>
  );
};

export default AboutUs;
