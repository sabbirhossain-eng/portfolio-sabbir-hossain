import SkillsCard from "../pages/Skills/SkillsCard";
import img from "./../assets/Skills/Skills.png";

const MySkills = () => {
  return (
    <div>
      <div className="flex  flex-col md:flex-row mt-10">
        <img src={img} alt="" className="w-1/2 mx-auto" data-aos="fade-up" data-aos-duration="3000"/>
        <div className="md:ml-10" data-aos="fade-up" data-aos-duration="3000">
          <h2 className="text-4xl font-semibold text-left">My Skills</h2>
          <p className="text-blue-gray-200 text-lg mt-2 text-justify">
            As a web developer, I specialize in a variety of technologies to
            create dynamic and engaging web applications. My skills include:
          </p>
          <SkillsCard />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
