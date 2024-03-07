import ProjectDetailsCard from "../../Components/ProjectDetails/ProjectDetailsCard";
import happyHomesHub from "../../assets/Project/Happy Homes Hub.png";
import libraryPules from "../../assets/Project/Library Pules.png";
import electraTech from "../../assets/Project/Electra Tech.png";
import propertyHunter from "../../assets/Project/property hunt.png";

const ProjectsDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
      {/* Property Hunter */}
      <div id="propertyHunter">
      <ProjectDetailsCard 
      img={propertyHunter} 
      title1={"Property Hunter"} 
      subTitle1={"A Real State Website"} 
      title2={"Project Feature ( I implement )"} 
      p1={"Properties, property details"} 
      p2={"Admin, Moderator & user Dashboard"} 
      p3={"Google map, QR code, Email sender with nodemailer"} 
      p4={"Manage property requests, Favorite List"} 
      p5={"Notification, Email sender with nodemailer"} 
      p6={"Notification, Stripe Payment gateway"}
      liveLink={"https://property-hunter-tm.netlify.app/"} 
      gitClient={"https://github.com/istiakahmedsarker/property-hunter-react"} gitServer={"https://github.com/istiakahmedsarker/Property-Hunter-Server"}/>
      </div>
      {/* Homes hub */}
      <div id="homesHub">
      <ProjectDetailsCard 
      img={happyHomesHub} 
      title1={"Happy Homes Hub"} 
      subTitle1={"Pet adoption Platform"} 
      title2={"Project Feature"} 
      p1={"Added dynamic gallery to home page"} 
      p2={"There is a country code selector option for phone numbers."} 
      p3={"Stripe payment method is used."} 
      p4={"jwt token used"} 
      p5={"Firebase Authentication"}
      liveLink={"https://happy-homes-hub.web.app"} 
      gitClient={"https://github.com/sabbirhossain-eng/happy-homes-hub-client"} gitServer={"https://github.com/sabbirhossain-eng/happy-homes-hub-server"}/>
      </div>
      {/* Library Pules */}
      <div id="libraryPules">
      <ProjectDetailsCard 
      img={libraryPules} 
      title1={"Library Pules"} 
      subTitle1={"Library Management System"} 
      title2={"Project Feature"} 
      p1={"Dark-light mode"} 
      p2={"Marquee"} 
      p3={"Category related marquee is used in the banner section."} 
      p4={"Category wise book list is shown"} 
      p5={"Added dark light mode theme and popular content section."} 
      liveLink={"https://library-pulse.web.app"} 
      gitClient={"https://github.com/sabbirhossain-eng/library-pulse-client"} gitServer={"https://github.com/sabbirhossain-eng/library-pulse-server"}/>
      </div>
      {/* Electra Tech */}
      <div id="electraTech">
      <ProjectDetailsCard 
      img={electraTech} 
      title1={"Electra Tech"} 
      subTitle1={"Technology and Electronics Brand Shop"} 
      title2={"Project Feature"} 
      p1={"DaisyUI"} 
      p2={"Category wise Product and list shown"} 
      p3={"Privet Route"} 
      p4={"jwt token used"} 
      p5={"Firebase Authentication"} 
      liveLink={"https://technology-and-electroni-89266.web.app"} 
      gitClient={"https://github.com/sabbirhossain-eng/brand-shop-client"} gitServer={"https://github.com/sabbirhossain-eng/brand-shop-server"}/>
      </div>
    </div>
  );
};

export default ProjectsDetails;
