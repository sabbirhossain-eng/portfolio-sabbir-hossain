import Animation from "../../Components/Animation/Animation";
import SoftSkillsCard from "./SoftSkillsCard";
import animate from "../../Components/Lottie/SoftSkills.json"
const SoftSkills = () => {
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-semibold text-center" data-aos="fade-up" data-aos-duration="3000">My Soft Skills</h2>
      <div className="flex  flex-col lg:flex-row mt-10">
      <div className="w-full mx-auto" data-aos="fade-up" data-aos-duration="3000">
        <Animation animate={animate} />
        </div>
        <div className="md:ml-10">
          <p className="text-blue-gray-200 text-lg mt-2 text-justify" data-aos="fade-up" data-aos-duration="3000">
          A passionate web developer with a unique blend of technical expertise and strong soft skills. With a keen eye for detail and a commitment to effective communication, I bring a holistic approach to web development that goes beyond just writing code.
          </p>
          <SoftSkillsCard/>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
