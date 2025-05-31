import Logo from "../assets/Logo.png";
import Button from "./button";

const Navbar = () => {
  return (
    <header className='top-0 right-0 left-0 fixed bg-bg'>
      <nav className='flex justify-between items-center px-8 py-4'>
        <div>
          <img src={Logo} alt='Logo' />
        </div>
        <Button title='Get Started' />
      </nav>
    </header>
  );
};

export default Navbar;
