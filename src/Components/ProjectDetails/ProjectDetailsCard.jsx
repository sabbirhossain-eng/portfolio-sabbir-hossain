import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const ProjectDetailsCard = ({
  img,
  title1,
  subTitle1,
  title2,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  liveLink,
  gitClient,
  gitServer,
}) => {
  return (
      <div className="w-full h-full">
        <div className="mb-10 rounded-lg bg-card-dark p-10 hover:border hover:border-primary">
          <div>
            <p className="text-xl sm:text-4xl font-semibold hover:text-primary transition duration-500 ease-in-out inline-block mb-2">
              {title1}
            </p>
            <p>{subTitle1}</p>
          </div>
          <div className="mt-2">
            <div className="h-96 transition-all">
              <img
                className="w-full h-full ease-in-out duration-[3s] rounded-2xl object-top object-cover hover:object-bottom"
                src={img}
                alt="Sunset in the mountains"
              />
            </div>
          </div>
          {/* Card Body */}
          <div className="text-in-dark mt-4 mb-8">
            <h2 className="text-3xl font-semibold text-primary mb-4">
              {title2}
            </h2>
            <p className="text-lg ">
              <span className="inline-block  mr-1">
                <GoDotFill />
              </span>
              {p1}
            </p>
            <p className="text-lg ">
              <span className="inline-block  mr-1">
                <GoDotFill />
              </span>
              {p2}
            </p>
            {p3 && (
              <p className="text-lg ">
                <span className="inline-block  mr-1">
                  <GoDotFill />
                </span>
                {p3}
              </p>
            )}
            {p4 && (
              <p className="text-lg ">
                <span className="inline-block  mr-1">
                  <GoDotFill />
                </span>
                {p4}
              </p>
            )}
            {p5 && (
              <p className="text-lg ">
                <span className="inline-block  mr-1">
                  <GoDotFill />
                </span>
                {p5}
              </p>
            )}
            {p6 && (
              <p className="text-lg ">
                <span className="inline-block  mr-1">
                  <GoDotFill />
                </span>
                {p6}
              </p>
            )}
          </div>
          {/* Link Button */}
          <div className="flex flex-col lg:flex-row lg:justify-between mb-4 mt-auto mx-auto gap-4">
            <div className="flex-1">
              <Link to={liveLink} target="_blank">
                <button className=" btm-sm px-1 py-1 text-sm hover:text-black  justify-center hover:bg-primary  rounded-md bg-card-dark text-in-dark hover:scale-125 transition duration-500 border-2 border-primary">
                  <span >|</span>&nbsp;&nbsp;
                  <span>Live Link</span>
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <Link to={gitClient} target="_blank">
                <button className=" btm-sm px-1 py-1 text-sm hover:text-black  justify-center hover:bg-primary  rounded-md bg-card-dark text-in-dark hover:scale-125 transition duration-500 border-2 border-primary">
                  <span >|</span>&nbsp;&nbsp;
                  <span>Client Side</span>
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <Link to={gitServer} target="_blank">
                <button className=" btm-sm px-1 py-1 text-sm hover:text-black  justify-center hover:bg-primary  rounded-md bg-card-dark text-in-dark hover:scale-125 transition duration-500 border-2 border-primary">
                  <span >|</span>&nbsp;&nbsp;
                  <span>Server Side</span>
                </button>
              </Link>
            </div>
          </div>
          <hr className="bg-primary p-[1px] border-none" />
        </div>
      
    </div>
  );
};

export default ProjectDetailsCard;
