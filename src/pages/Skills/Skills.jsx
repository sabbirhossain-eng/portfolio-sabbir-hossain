import SkillsCard from "./SkillsCard";
import img from "./../../assets/Skills/Skills.png";
const Skills = () => {
  return (
    <div className="font-sans">
      <h2 className="text-4xl font-semibold text-center">My Skills</h2>
      <div className="flex  flex-col md:flex-row mt-10">
        <img src={img} alt="" className="w-1/2 mx-auto" />
        <div className="md:ml-10">
          <p className="text-blue-gray-200 text-lg">
            As a web developer, I specialize in a variety of technologies to
            create dynamic and engaging web applications. My skills include:
          </p>
          <SkillsCard />
        </div>
      </div>
    </div>
  );
};

export default Skills;
