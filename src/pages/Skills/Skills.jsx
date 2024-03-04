import SkillsCard from "./SkillsCard";
import SoftSkills from "./SoftSkills";
import Animation from "../../Components/Animation/Animation";
import animate from "../../Components/Lottie/Skills.json"
const Skills = () => {
  return (
    <div className="">
      <div className="flex  flex-col lg:flex-row mt-10">
      <div className="w-full mx-auto" data-aos="fade-up" data-aos-duration="3000">
        <Animation animate={animate} />
        </div>
        <div className="md:ml-10">
          <h2 className="text-4xl font-semibold text-left" data-aos="fade-up" data-aos-duration="3000">My Skills</h2>
          <p className="text-blue-gray-200 text-lg mt-2 text-justify" data-aos="fade-up" data-aos-duration="3000">
            As a web developer, I specialize in a variety of technologies to
            create dynamic and engaging web applications. My skills include:
          </p>
          <SkillsCard />
        </div>
      </div>
      <SoftSkills />
    </div>
  );
};

export default Skills;
