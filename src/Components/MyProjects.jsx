import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import img1 from "../assets/Project/project1.png";
import img2 from "../assets/Project/projects2.png";
import img3 from "../assets/Project/projects3.png";
import { HashLink } from "react-router-hash-link";

const MyProjects = () => {
  return (
    <div>
        <div className="font-sans w-1/2 mx-auto text-center my-10">
            <h2 className=" text-4xl text-[#c9f31d] font-semibold" data-aos="fade-up" data-aos-duration="3000">My Projects</h2>
            <p className="text-blue-gray-200 text-lg" data-aos="fade-up" data-aos-duration="3000">
            Crafting digital experiences that matter. Whether connecting hearts through our Pet Adoption Platform, empowering knowledge with the Library Management System, or elevating style at our Brand Shop, we bring innovation and user-centric design to redefine how people interact with technology.
          </p>
        </div>
      <div className="grid md:grid-cols-2 lg:flex lg:justify-center lg:flex-row gap-4 mx-auto">
        {/* card 1 */}
        <Card className="w-full bg-black border border-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
          <CardHeader floated={false} className="h-80">
            <img src={img1} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="white" className="mb-2">
              Happy Homes Hub
            </Typography>
            <Typography
              className="font-medium text-blue-gray-200 text-lg"
              textGradient
            >
              Pet adoption Platform
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <HashLink to="/projects/#homesHub">
              <button className="btn btn-sm bg-[#c9f31d] text-black ">
                View Details
              </button>
            </HashLink>
          </CardFooter>
        </Card>
        {/* card 2 */}
        <Card className="w-full bg-black border border-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
          <CardHeader floated={false} className="h-80">
            <img src={img2} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="white" className="mb-2">
              Library Pules
            </Typography>
            <Typography
              className="font-medium text-blue-gray-200 text-lg"
              textGradient
            >
              Library Management System
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <HashLink to="/projects/#libraryPules">
              <button className="btn btn-sm bg-[#c9f31d] text-black ">
                View Details
              </button>
            </HashLink>
          </CardFooter>
        </Card>
        {/* card 3 */}
        <Card className="w-full bg-black border border-[#c9f31d]" data-aos="fade-up" data-aos-duration="3000">
          <CardHeader floated={false} className="h-80">
            <img src={img3} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="white" className="mb-2">
              Technology and Electronics Brand Shop
            </Typography>
            <Typography
              className="font-medium text-blue-gray-200 text-lg"
              textGradient
            >
              Brand Shop
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <HashLink to="/projects/#brandShop">
              <button className="btn btn-sm bg-[#c9f31d] text-black ">
                View Details
              </button>
            </HashLink>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default MyProjects;
