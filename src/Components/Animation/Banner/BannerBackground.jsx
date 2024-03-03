import Lottie from "lottie-react";
import background from "./BackgroundBanner.json";

const BannerBackground = () => {
  return (
    <div>
        <Lottie animationData={background} loop={true} />
    </div>
  );
};

export default BannerBackground;
