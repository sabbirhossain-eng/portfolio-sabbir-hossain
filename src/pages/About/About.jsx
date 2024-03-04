import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabStyle.css";
import MyAbout from "../../Components/MyAbout";
import Experience from "../../Components/Experience";
import Education from "../../Components/Education";
import Skills from "../Skills/Skills";

const About = () => {
  return (
    <div className="mt-10">
      <h2
        className="text-2xl font-semibold w-full lg:w-1/2 mx-auto md:text-center mb-10 text-justify"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        I am Sabbir Hossain, I am a Web Developer, Currently residing in the
        Dhaka Bangladesh. Ready to take on any challenge.
      </h2>
      <Tabs>
        <TabList
          className="text-center mx-auto flex flex-col justify-center md:flex-row"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <Tab className="btn bg-card-dark border-none text-in-dark text-lg uppercase active:bg-primary hover:outline hover:outline-primary hover:text-primary hover:bg-transparent">
            About{" "}
          </Tab>
          <Tab className="btn bg-card-dark border-none text-in-dark text-lg uppercase active:bg-primary mt-2 md:mt-0 md:ml-10 hover:outline hover:outline-primary hover:text-primary hover:bg-transparent">
            Experience
          </Tab>
          <Tab className="btn bg-card-dark border-none text-in-dark text-lg uppercase active:bg-primary mt-2 md:mt-0 md:ml-10 hover:outline hover:outline-primary hover:text-primary hover:bg-transparent">
            Education
          </Tab>
          <Tab className="btn bg-card-dark border-none text-in-dark text-lg uppercase active:bg-primary mt-2 md:mt-0 md:ml-10 hover:outline hover:outline-primary hover:text-primary hover:bg-transparent">
            Skills
          </Tab>
        </TabList>

        <TabPanel>
          <MyAbout />
        </TabPanel>
        <TabPanel>
          <Experience />
        </TabPanel>
        <TabPanel>
          <Education />
        </TabPanel>
        <TabPanel>
          <Skills />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default About;
