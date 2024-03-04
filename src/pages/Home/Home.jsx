import MyProjects from "../../Components/MyProjects/MyProjects";
import About from "../About/About";
import Contract from "../Contract/Contract";
import Banner from "./Banner";

const Home = () => {
    
    return (
        <div>
            <Banner/>
            <div id="about">
            <About/>
            </div>
            <div id="projects">
                <MyProjects/>
            </div>
            <div id="contract">
                <Contract/>
            </div>
        </div>
    );
};

export default Home;