import { FaLinkedin } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { VscGithubInverted } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-in-dark py-8 px-2 ">
      <div className="flex flex-col items-center text-center">
        <p className="text-lg">Stay connected with Me :</p>
        <ul className="flex space-x-4 my-8">
          <li>
            <Link
              to="https://www.linkedin.com/in/sabbirhossain1"
              target="_blank"
            >
              <p className=" text-3xl font-semibold hover:text-primary">
                <FaLinkedin />
              </p>
            </Link>
          </li>
          <li>
            <Link to="https://github.com/sabbirhossain-eng" target="_blank">
              <p className=" text-3xl font-semibold hover:text-primary">
                <VscGithubInverted />
              </p>
            </Link>
          </li>
          <li>
            <Link to="https://sabbirhossain-8630c.web.app/" target="_blank">
              <p className=" text-3xl font-semibold hover:text-primary">
                <TfiWorld />
              </p>
            </Link>
          </li>
        </ul>
        <p className="text-base">
          Copyright &copy; 2024 - All right reserved by{" "}
          <a
            href="https://sabbirhossain-8630c.web.app"
            className="hover:underline mx-2 text-primary"
          >
            Sabbir Hossain
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
