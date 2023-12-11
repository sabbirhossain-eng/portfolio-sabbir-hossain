import { Typography } from "@material-tailwind/react";
import { FaLinkedin } from "react-icons/fa6";
import { TfiEmail, TfiWorld } from "react-icons/tfi";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-[#c9f31d] py-6 text-center md:justify-between mt-10 mx-auto">
      <Typography className="text-white text-xl font-medium flex items-center ml-10">
            <TfiEmail className="mr-2"/> sabbirh8181@gmail.com
          </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 md:mr-10 mx-auto">
        <li>
          <Typography>
            <Link
              to="https://www.linkedin.com/in/sabbirhossain1"
              target="_blank"
            >
              <p className="text-white text-3xl font-semibold">
                <FaLinkedin />
              </p>
            </Link>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-[#c9f31d] focus:text-[#c9f31d]"
          >
            <Link to="https://github.com/sabbirhossain-eng" target="_blank">
              <p className="text-white text-3xl font-semibold">
                <VscGithubInverted />
              </p>
            </Link>
          </Typography>
        </li>
        <li>
          <Typography>
            <Link>
              <p className="text-white text-3xl font-semibold">
                <TfiWorld />
              </p>
            </Link>
          </Typography>
        </li>
      </ul>
      </div>
      <Typography color="white" className="font-normal text-center">
        &copy; 2023 Sabbir Hossain
      </Typography>
    </footer>
  );
};

export default Footer;
