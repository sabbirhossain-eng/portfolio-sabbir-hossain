import sabbir from "./../../assets/sabbir.png";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaDownload, FaLinkedin } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
import { TfiWorld } from "react-icons/tfi";
import { saveAs } from "file-saver";
import resume from "../../assets/Resume/sabbirhossain.pdf";
import BannerBackground from "../../Components/Animation/Banner/BannerBackground";
const Banner = () => {
  const downloadResume = () => {
    saveAs(resume, "sabbirHossain.pdf");
  };

  return (
      <div className="py-2 z-10">
        {/* <img className="w-full h-full ease-in-out duration-[3s] rounded-2xl object-top object-cover hover:object-bottom" src="/assets/FruitBurst-kUT_R7cg.png" alt="/assets/FruitBurst-kUT_R7cg.png"/> */}
        <div className="flex flex-col md:flex-row justify-between items-center mx-auto">
          <div
            className="w-full flex-1"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="text-5xl font-semibold leading-none">
              Welcome to My Portfolio
            </h1>
            <TypeAnimation
              className="text-primary text-xl mt-10"
              sequence={[
                "I am Sabbir Hossain",
                1000,
                "I am Sabbir Hossain Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block", }}
              repeat={Infinity}
            />
            <div
              className="flex flex-col space-y-10 mt-10 mx-auto"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              {/* LinkedIn */}
              <Link
                to="https://www.linkedin.com/in/sabbirhossain1"
                target="_blank"
              >
                <div className="group inline-block relative">
                  <p className="text-white hover:text-primary text-3xl font-semibold relative">
                    <FaLinkedin />
                  </p>
                  <div className="opacity-0 w-40 bg-primary text-primary-dark text-center text-sm rounded-md py-2 absolute z-10 top-1/2 left-12 transform -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="absolute h-2 w-2 bg-primary rotate-45 -left-1 transform translate-y-1.5"></span>
                    LinkedIn
                  </div>
                </div>
              </Link>
              {/* github */}
              <Link to="https://github.com/sabbirhossain-eng" target="_blank">
              <div className="group inline-block relative">
                  <p className="text-white hover:text-primary text-3xl font-semibold relative">
                  <VscGithubInverted />
                  </p>
                  <div className="opacity-0 w-40 bg-primary text-primary-dark text-center text-sm rounded-md py-2 absolute z-10 top-1/2 left-12 transform -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="absolute h-2 w-2 bg-primary rotate-45 -left-1 transform translate-y-1.5"></span>
                    Github
                  </div>
                </div>
              </Link>
              {/* website */}
              <Link to="https://sabbirhossain-8630c.web.app/" target="_blank">
              <div className="group inline-block relative">
                  <p className="text-white hover:text-primary text-3xl font-semibold relative">
                  <TfiWorld />
                  </p>
                  <div className="opacity-0 w-40 bg-primary text-primary-dark text-center text-sm rounded-md py-2 absolute z-10 top-1/2 left-12 transform -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-100 ">
                    <span className="absolute h-2 w-2 bg-primary rotate-45 -left-1 transform translate-y-1.5"></span>
                    Portfolio
                  </div>
                </div>
              </Link>
            </div>
            <div className="mt-10" data-aos="fade-up" data-aos-duration="3000">
              <a rel="noopener noreferrer" onClick={downloadResume}
              className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-card-dark rounded-lg hover:bg-white group"
              >
                <span className="w-60 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>

                <button className="flex items-center relative w-full text-left text-primary transition-colors duration-300 ease-in-out group-hover:text-primary-dark">
                  Resume <FaDownload className="ml-2" />
                </button>
              </a>
            </div>
          </div>
          <div
            className=" flex-1 py-8 bottom-0"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="absolute top-[4%] opacity-40 w-[60%]">
            <BannerBackground/>
            </div>
            <img src={sabbir} className="rounded-full h-full relative z-10 lg:-right-60" />
          </div>
        </div>
      </div>
  );
};

export default Banner;
