import { Typography } from "@material-tailwind/react";

const Footer = () => {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-[#c9f31d] py-6 text-center md:justify-between mt-10 mx-auto">
      <Typography color="white" className="font-normal ml-10">
        &copy; 2023 Sabbir Hossain
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 md:mr-10 mx-auto">
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-[#c9f31d] focus:text-[#c9f31d] "
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-[#c9f31d] focus:text-[#c9f31d]"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-[#c9f31d] focus:text-[#c9f31d]"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-[#c9f31d] focus:text-[#c9f31d]"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
    );
};

export default Footer;