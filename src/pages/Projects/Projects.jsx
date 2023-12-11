import ProjectCard from "../../Components/ProjectCard";
import img1 from "../../assets/Project/project1.png";
import img2 from "../../assets/Project/projects2.png";
import img3 from "../../assets/Project/projects3.png";

const Projects = () => {
  return (
    <div className="space-y-10">
      <div id="homesHub">
      <ProjectCard img={img1} title1={"Happy Homes Hub"} subTitle1={"Pet adoption Platform"} title2={"Project Feature"} p1={"Added dynamic gallery to home page"} p2={"There is a country code selector option for phone numbers."} p3={"Stripe payment method is used."} p4={"jwt token used"} p5={"Firebase Authentication"} liveLink={"https://happy-homes-hub.web.app"} gitClient={"https://github.com/sabbirhossain-eng/happy-homes-hub-client"} gitServer={"https://github.com/sabbirhossain-eng/happy-homes-hub-server"}/>
      </div>
      <div id="libraryPules">
      <ProjectCard img={img2} title1={"Library Pules"} subTitle1={"Library Management System"} title2={"Project Feature"} p1={"Dark-light mode"} p2={"Marquee"} p3={"Category related marquee is used in the banner section."} p4={"Category wise book list is shown"} p5={"Added dark light mode theme and popular content section."} liveLink={"https://library-pulse.web.app"} gitClient={"https://github.com/sabbirhossain-eng/library-pulse-client"} gitServer={"https://github.com/sabbirhossain-eng/library-pulse-server"}/>
      </div>
      <div id="brandShop">
      <ProjectCard img={img3} title1={"Technology and Electronics Brand Shop"} subTitle1={"Brand Shop"} title2={"Project Feature"} p1={"DaisyUI"} p2={"Category wise Product and list shown"} p3={"Privet Route"} p4={"jwt token used"} p5={"Firebase Authentication"} liveLink={"https://technology-and-electroni-89266.web.app"} gitClient={"https://github.com/sabbirhossain-eng/brand-shop-client"} gitServer={"https://github.com/sabbirhossain-eng/brand-shop-server"}/>
      </div>
    </div>
  );
};

export default Projects;
