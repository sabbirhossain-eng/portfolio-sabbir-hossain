import About from "../About/About";
import Banner from "./Banner";

const Home = () => {
    
    return (
        <div>
            <Banner/>
            <div id="about">
            <About/>
            </div>
        </div>
    );
};

export default Home;