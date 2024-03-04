import happyHomesHub from "../../assets/Project/Happy Homes Hub.png";
import libraryPules from "../../assets/Project/Library Pules.png";
import electraTech from "../../assets/Project/Electra Tech.png";
import teamProject from "../../assets/Project/property hunt.png";
import ProjectCard from "../ProjectCard/ProjectCard";

const MyProjects = () => {
  return (
    <div>
      <div className="w-full lg:w-1/2 mx-auto text-center my-10">
        <h2
          className=" text-4xl text-primary font-semibold"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          My Projects
        </h2>
        <p
          className="text-blue-gray-200 text-lg mt-2 text-justify"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Crafting digital experiences that matter. Whether connecting hearts
          through our Pet Adoption Platform, empowering knowledge with the
          Library Management System, or elevating style at our Brand Shop, we
          bring innovation and user-centric design to redefine how people
          interact with technology.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Property Hunter */}
          <ProjectCard
            image={teamProject}
            title={"Property Hunter"}
            subTitle={"A Real State Website"}
            hashRoute={"PropertyHunter"}
          />
        {/* Happy Homes Hub */}
          <ProjectCard
            image={happyHomesHub}
            title={"Happy Homes Hub"}
            subTitle={"Pet adoption Platform"}
            hashRoute={"homesHub"}
          />
        {/* Library Pules */}
          <ProjectCard
            image={libraryPules}
            title={"Library Pules"}
            subTitle={"Library Management System"}
            hashRoute={"libraryPules"}
          />
        {/* Electra Tech */}
          <ProjectCard
            image={electraTech}
            title={"Electra Tech"}
            subTitle={"Technology and Electronics Brand Shop"}
            hashRoute={"electraTech"}
          />
      </div>
    </div>
  );
};

export default MyProjects;
