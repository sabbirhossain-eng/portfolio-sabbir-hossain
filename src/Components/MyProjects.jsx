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
    <div className="flex flex-col justify-center md:flex-row gap-4 mx-auto">
        {/* card 1 */}
       <Card className="w-96 bg-black border border-[#c9f31d]">
      <CardHeader floated={false} className="h-80">
        <img src={img1} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="white" className="mb-2">
          Happy Homes Hub
        </Typography>
        <Typography className="font-medium text-blue-gray-200 text-lg" textGradient>
        Pet adoption Platform
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <HashLink to="/projects/#homesHub">
        <button className="btn btn-sm bg-[#c9f31d] text-black ">View Details</button>
        </HashLink>
      </CardFooter>
    </Card>
        {/* card 2 */}
       <Card className="w-96 bg-black border border-[#c9f31d]">
      <CardHeader floated={false} className="h-80">
        <img src={img2} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="white" className="mb-2">
        Library Pules
        </Typography>
        <Typography className="font-medium text-blue-gray-200 text-lg" textGradient>
        Library Management System
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
      <HashLink to="/projects/#libraryPules">
        <button className="btn btn-sm bg-[#c9f31d] text-black ">View Details</button>
        </HashLink>
      </CardFooter>
    </Card>
        {/* card 3 */}
       <Card className="w-96 bg-black border border-[#c9f31d]">
      <CardHeader floated={false} className="h-80">
        <img src={img3} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="white" className="mb-2">
        Technology and Electronics Brand Shop
        </Typography>
        <Typography className="font-medium text-blue-gray-200 text-lg" textGradient>
        Brand Shop
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
      <HashLink to="/projects/#brandShop">
        <button className="btn btn-sm bg-[#c9f31d] text-black ">View Details</button>
        </HashLink>
      </CardFooter>
    </Card>
    </div>
  );
};

export default MyProjects;
