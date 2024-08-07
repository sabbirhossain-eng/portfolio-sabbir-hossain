import img from "../assets/sabbir.png";
import { FaLinkedin } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router-dom";
const MyAbout = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row mt-10">
        <img
          src={img}
          alt=""
          className="w-1/2 h-1/2 mx-auto"
          data-aos="fade-up"
          data-aos-duration="3000"
        />
        <div className="md:ml-10">
          <h2
            className="text-4xl font-semibold md:text-left"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Personal Info
          </h2>
          <p
            className="text-blue-gray-200 text-lg mt-2 text-justify"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Hello! I am Sabbir, a web developer ready to bring your digital
            vision to life. If you are looking for a dedicated and communicative
            collaborator, I am here for you. Feel free to reach out for
            inquiries, project discussions, or just to say hello. Lets build
            something amazing together!
          </p>
          <div className="grid lg:grid-cols-2 gap-10 mt-4 mx-auto">
            {/* card 1 */}

            <div
              className="card w-full lg:w-full bg-card-dark text-neutral-content hover:border hover:border-primary"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="card-body">
                <h2 className="card-title text-blue-gray-200">Email</h2>
                <a href="mailto:sabbirhossain2k10@gmail.com">
                  <p className="text-in-dark lg:text-xl md:font-semibold">
                  sabbirhossain2k10@gmail.com
                  </p>
                </a>
              </div>
            </div>

            {/* card 2 */}

            <div
              className="card w-full lg:w-full bg-card-dark text-neutral-content hover:border hover:border-primary"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="card-body">
                <h2 className="card-title text-blue-gray-200">Phone</h2>
                <a href="tel:+8801707522427">
                  <p className="text-in-dark text-xl font-semibold">
                    +880 1707 522427
                  </p>
                </a>
              </div>
            </div>

            {/* card 3 */}
            <div
              className="card w-full lg:w-full bg-card-dark text-neutral-content hover:border hover:border-primary"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="card-body">
                <h2 className="card-title text-blue-gray-200">Follow</h2>
                <div className="flex justify-evenly">
                  <Link
                    to="https://www.linkedin.com/in/sabbirhossain1"
                    target="_blank"
                  >
                    <p className="text-in-dark text-3xl font-semibold">
                      <FaLinkedin />
                    </p>
                  </Link>
                  <Link
                    to="https://github.com/sabbirhossain-eng"
                    target="_blank"
                  >
                    <p className="text-in-dark text-3xl font-semibold">
                      <VscGithubInverted />
                    </p>
                  </Link>
                  <Link
                    to="https://sabbirhossain-8630c.web.app/"
                    target="_blank"
                  >
                    <p className="text-in-dark text-3xl font-semibold">
                      <TfiWorld />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAbout;
