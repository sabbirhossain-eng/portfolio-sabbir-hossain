import Lottie from "lottie-react";
import background from "./BackgroundBanner.json";

const BannerBackground = () => {
  return (
    <div>
      <div className=" dark:bg-primary-dark opacity-90 w-full flex items-center justify-center mx-auto">
        <Lottie animationData={background} loop={true} />
      </div>
    </div>
  );
};

export default BannerBackground;
