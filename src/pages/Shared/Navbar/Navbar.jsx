import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../../assets/Logo.png";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const handleClick = () => {
    
    window.location.reset(true);
  };



const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium font-sans text-lg"
      >
        <NavLink
          to="/"
          onClick={handleClick}
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium font-sans text-lg"
      >
        <HashLink smooth to="/#about">
          About
        </HashLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium font-sans text-lg"
      >
        <HashLink smooth to="/#projects">
          Projects
        </HashLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-medium font-sans text-lg"
      >
        <HashLink smooth to="/#contract">
        Contract Me
        </HashLink>
      </Typography>
    </ul>
  );
  return (
    <div>
      <Navbar className=" bg-black top-0 z-10 h-max max-w-full rounded-none px-4 lg:px-8 fixed">
        <div className="flex items-center justify-between text-white ">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <img src={logo} alt="Sabbir Hossain" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} onClick={() => setOpenNav(!openNav)}>{navList}</MobileNav>
      </Navbar>
    </div>
  );
};

export default NavBar;
