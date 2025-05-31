import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon for mobile menu
import Logo from "../assets/Logo.png";
import CoinView from "../components/coinview";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <Link
        to='learn'
        className='block hover:bg-primary/20 px-4 py-2 rounded-md'
        onClick={() => setMenuOpen(false)}
      >
        Learn
      </Link>
      <Link
        to='quest'
        className='block hover:bg-primary/20 px-4 py-2 rounded-md'
        onClick={() => setMenuOpen(false)}
      >
        Quest
      </Link>
      <Link
        to='profile'
        className='block hover:bg-primary/20 px-4 py-2 rounded-md'
        onClick={() => setMenuOpen(false)}
      >
        Profile
      </Link>
    </>
  );

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Sidebar - hidden on mobile */}
      <aside className='hidden top-0 left-0 z-50 md:fixed md:flex bg-bg p-4 border-white/10 border-r w-64 h-screen'>
        <div className='flex flex-col w-full'>
          <img src={Logo} alt='Logo' className='mb-8 w-32' />
          <nav className='flex flex-col gap-6 p-2'>{navLinks}</nav>
        </div>
      </aside>

      {/* Top Nav */}
      <header className='top-0 left-0 z-40 fixed flex justify-between items-center bg-bg px-4 py-4 md:pl-64 border-white/20 border-b w-full'>
        {/* Logo & Menu on mobile */}
        <div className='flex items-center gap-4'>
          <img src={Logo} alt='Logo' className='md:hidden h-8' />
          <button
            className='md:hidden p-1'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
          >
            {menuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* CoinView always visible */}
        <CoinView />
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='md:hidden top-16 right-4 left-4 z-40 absolute bg-bg shadow-md border border-white/10 rounded-md'>
          <nav className='flex flex-col gap-2 p-4'>{navLinks}</nav>
        </div>
      )}

      {/* Main content */}
      <main className='flex-1 md:pt-20 md:pl-64'>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
