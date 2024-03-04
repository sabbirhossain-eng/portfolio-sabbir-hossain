import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { HashLink } from "react-router-hash-link";
const ProjectCard = ({ image, title, subTitle, hashRoute }) => {
  return (
    <div className="w-full flex flex-wrap">
      <Card
        className="w-full bg-card-dark border border-primary"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <CardHeader floated={false} className="h-80 transition-all">
          <img
            className="w-full h-full ease-in-out duration-[3s] rounded-2xl object-top object-cover hover:object-bottom"
            src={image}
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="white" className="mb-2">
            {title}
          </Typography>
          <Typography
            className="font-medium text-blue-gray-200 text-lg"
            textGradient
          >
            {subTitle}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <HashLink to={`/projects/#${hashRoute}`}>
            <button className="btn btn-sm bg-primary text-black ">
              View Details
            </button>
          </HashLink>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
