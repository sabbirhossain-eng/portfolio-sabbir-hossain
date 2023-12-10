import { Parallax } from "react-parallax";
import img from "./../../assets/Banner.png";
import sabbir from "./../../assets/sabbir.png";

import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="The Rabbit"
      strength={-200}
    >
      <div className="py-8 z-10 font-sans">
        <div className="flex flex-col md:flex-row items-center mx-auto ml-10">
          <div className="w-full md:w-1/2 py-8">
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
          </div>
          <div className="w-full md:w-1/2 py-8">
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
