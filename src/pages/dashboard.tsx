import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/Logo.png";
import CoinView from "../components/coinview";

const Dashboard = () => {
  return (
    <div className='flex min-h-screen'>
      {/* Sidebar */}
      <aside className='top-0 z-50 fixed bg-bg p-4 w-64'>
        <div>
          <img src={Logo} alt='Logo' />
        </div>
        <nav className='flex flex-col justify-center gap-6 p-6'>
          <Link
            to='learn'
            className='hover:bg-primary/40 px-4 py-2 border hover:border-primary border-transparent rounded-lg hover:underline'
          >
            Learn
          </Link>
          <Link
            to='quest'
            className='hover:bg-primary/40 px-4 py-2 border hover:border-primary border-transparent rounded-lg hover:underline'
          >
            Quest
          </Link>
          <Link
            to='profile'
            className='hover:bg-primary/40 px-4 py-2 border hover:border-primary border-transparent rounded-lg hover:underline'
          >
            Profile
          </Link>
        </nav>
      </aside>

      {/* Top Nav */}
      <header className='top-0 right-0 left-64 z-40 fixed bg-bg border-white/30 border-b'>
        <nav className='flex justify-end items-center px-8 py-4'>
          <CoinView />
        </nav>
      </header>

      {/* Main content */}
      <main className='flex-1 pl-64'>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
