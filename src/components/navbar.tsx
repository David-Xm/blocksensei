import { useLocation } from "react-router";
import Logo from "../assets/Logo.png";
import x from "../assets/cancel_svgrepo.com.png";
import Button from "./button";

const Navbar = () => {
  const location = useLocation();

  const getButtonText = () => {
    switch (location.pathname) {
      case "/":
        return "Get Started";
      case "/signup":
        return (
          <button className='cursor-pointer'>
            <img src={x} alt='close' />
          </button>
        );
      default:
        return "Get Started";
    }
  };
  return (
    <header className='hidden top-0 right-0 left-0 z-40 md:fixed md:flex bg-bg'>
      <nav className='flex justify-between items-center px-8 py-4 w-full'>
        <div className='flex items-center max-md:w-1/2'>
          <img src={Logo} alt='Logo' />
        </div>
        <div className='flex justify-end items-center max-md:w-1/2'>
          <Button title={getButtonText()} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
