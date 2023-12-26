
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabStyle.css";
import MyAbout from "../../Components/MyAbout";
import Experience from "../../Components/Experience";
import Education from "../../Components/Education";
import Skills from "../Skills/Skills";

const About = () => {

  return (
    <div className="mt-10">
        <h2 className="font-sans text-2xl font-semibold w-full lg:w-1/2 mx-auto text-center mb-10" data-aos="fade-up" data-aos-duration="3000">
        I am Sabbir Hossain, I am a Web Developer, Currently residing in the Dhaka Bangladesh. Ready to take on any challenge.
        </h2>
      <Tabs>
        <TabList className="text-center font-sans mx-auto flex flex-col  justify-center md:flex-row" data-aos="fade-up" data-aos-duration="3000">
          <Tab className="btn bg-gray-800 border-none text-white text-lg uppercase active:bg-[#c9f31d] "> 
          About </Tab>
          <Tab className="btn bg-gray-800 border-none text-white text-lg uppercase active:bg-[#c9f31d] mt-2 md:mt-0 md:ml-10">Experience</Tab>
          <Tab className="btn bg-gray-800 border-none text-white text-lg uppercase active:bg-[#c9f31d] mt-2 md:mt-0 md:ml-10">Education</Tab>
          <Tab className="btn bg-gray-800 border-none text-white text-lg uppercase active:bg-[#c9f31d] mt-2 md:mt-0 md:ml-10">Skills</Tab>
        </TabList>

        <TabPanel>
          <MyAbout/>
        </TabPanel>
        <TabPanel>
          <Experience/>
        </TabPanel>
        <TabPanel>
          <Education/>
        </TabPanel>
        <TabPanel>
          <Skills/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default About;
