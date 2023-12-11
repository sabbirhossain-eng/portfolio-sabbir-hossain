
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabStyle.css";
import MySkills from "../../Components/MySkills";
import MyAbout from "../../Components/MyAbout";

const About = () => {
  return (
    <div className="mt-10">
        <h2 className="font-sans text-2xl font-semibold w-1/2 mx-auto text-center mb-10">
        I am Sabbir Hossain, I am a Web Developer, Currently residing in the Dhaka Bangladesh. Ready to take on any challenge.
        </h2>
      <Tabs>
        <TabList className="text-center font-sans mx-auto">
          <Tab className="btn bg-gray-800 border-none text-white text-lg uppercase active:bg-[#c9f31d] "> 
          About </Tab>
          <Tab className="btn bg-gray-800 border-none text-white text-lg uppercase active:bg-[#c9f31d] ml-4 md:ml-10">Experience</Tab>
          <Tab className="btn bg-gray-800 border-none text-white text-lg uppercase active:bg-[#c9f31d] ml-4 md:ml-10">Skills</Tab>
        </TabList>

        <TabPanel>
          <MyAbout/>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          
          <MySkills/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default About;
