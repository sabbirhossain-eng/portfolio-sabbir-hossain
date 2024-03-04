import Lottie from "lottie-react";


const Animation = ({animate}) => {
    return (
        <div>
            <Lottie animationData={animate} loop={true}/>
        </div>
    );
};

export default Animation;