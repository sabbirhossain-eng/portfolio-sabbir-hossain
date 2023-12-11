import { Parallax } from "react-parallax";
import img from "./../../assets/Banner.png";
import sabbir from "./../../assets/sabbir.png";

import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaDownload, FaLinkedin } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
import { TfiWorld } from "react-icons/tfi";
import { saveAs } from 'file-saver';
import resume from "../../assets/Resume/sabbirhossain.pdf";
const Banner = () => {

  const downloadResume = () => {
    saveAs(resume, 'sabbirHossain.pdf');
  };

  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="The Rabbit"
      strength={-200}
    >
      <div className="py-8 z-10 font-sans">
        <div className="flex flex-col md:flex-row items-center mx-auto ml-10">
          <div className="w-full md:w-1/2 py-8" data-aos="fade-up"
     data-aos-duration="3000">
            <h1 className="text-7xl font-semibold leading-none tracking-tighter ">
              Welcome to My Portfolio
            </h1>
            <TypeAnimation
            className="text-[#c9f31d] text-xl font-sans mt-10"
              sequence={[
                "I am Sabbir Hossain",
                1000,
                "I am Sabbir Hossain Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block"  }}
              repeat={Infinity}
            />
            <div className="flex space-x-10 mt-10" data-aos="fade-up" data-aos-duration="3000">
            <Link to="https://www.linkedin.com/in/sabbirhossain1" target="_blank">
                  <p className="text-white hover:text-[#c9f31d] text-3xl font-semibold">
                    <FaLinkedin />
                  </p>
                  </Link>
                  <Link to="https://github.com/sabbirhossain-eng" target="_blank">
                    <p className="text-white hover:text-[#c9f31d] text-3xl font-semibold">
                      <VscGithubInverted />
                    </p>
                  </Link>
                  <Link>
                  <p className="text-white hover:text-[#c9f31d] text-3xl font-semibold">
                    <TfiWorld />
                  </p>
                  </Link>
            </div>
            <div className="mt-10" data-aos="fade-up" data-aos-duration="3000">
            <a rel="noopener noreferrer" onClick={downloadResume}>
              <button className="flex btn btn-ghost text-[#c9f31d] bg-neutral font-sans text-lg">Resume <FaDownload className="ml-2"/></button>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 py-8" data-aos="fade-up" data-aos-duration="3000">
            <img
              src={sabbir}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Banner;
