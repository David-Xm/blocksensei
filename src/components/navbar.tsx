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
    <header className='top-0 right-0 left-0 z-40 fixed bg-bg'>
      <nav className='flex justify-between items-center px-8 py-4'>
        <div>
          <img src={Logo} alt='Logo' />
        </div>
        <Button title={getButtonText()} />
      </nav>
    </header>
  );
};

export default Navbar;
