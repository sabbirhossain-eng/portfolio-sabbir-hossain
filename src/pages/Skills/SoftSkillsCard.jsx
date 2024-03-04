import hardWorking from "./../../assets/Soft_Skills/Hard_Working.png";
import teamWorking from "./../../assets/Soft_Skills/TeamWorking.png";
import timeManagement from "./../../assets/Soft_Skills/time-management.png";
import responsibility from "./../../assets/Soft_Skills/responsibility.png";
import leadership from "./../../assets/Soft_Skills/leadership.png";
import management from "./../../assets/Soft_Skills/management.png";
import motivation from "./../../assets/Soft_Skills/motivation.png";

const SoftSkillsCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-4 mx-auto">
      {/* skills 1 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={hardWorking} alt="Hard Working" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold  text-2xl text-center">
              Hard Working
            </h3>
          </div>
        </div>
      </div>
      {/* skills 2 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={teamWorking} alt="Team Working" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold  text-2xl text-center">
              Team Working
            </h3>
          </div>
        </div>
      </div>
      {/* skills 3 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={timeManagement} alt="Time Management" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold  text-2xl text-center">
              Time Management
            </h3>
          </div>
        </div>
      </div>
      {/* skills 4 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={responsibility} alt="Responsibility" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold  text-2xl text-center">
              Responsibility
            </h3>
          </div>
        </div>
      </div>
      {/* skills 5 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={leadership} alt="Leadership" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold  text-2xl text-center">
              Leadership
            </h3>
          </div>
        </div>
      </div>
      {/* skills 6 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={management} alt="management" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold  text-2xl text-center">
              management
            </h3>
          </div>
        </div>
      </div>
      {/* skills 7 */}
      <div className="card w-full bg-card-dark text-neutral-content hover:border hover:border-primary" data-aos="fade-up" data-aos-duration="3000">
        <div className="card-body items-center">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <img src={motivation} alt="Motivation" className="w-1/3" />
            <h3 className="mt-2 md:mt-0  w-1/2 font-semibold  text-2xl text-center">
              Motivation
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftSkillsCard;
