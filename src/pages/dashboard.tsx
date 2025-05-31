import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className='flex min-h-screen'>
      {/* Sidebar */}
      <aside className='p-4 w-64'>
        <h2 className='mb-4 font-bold text-xl'>Sign In</h2>
        <nav className='flex flex-col gap-2'>
          <Link to='learn' className='hover:underline'>
            Learn
          </Link>
          <Link to='build' className='hover:underline'>
            Build
          </Link>
          <Link to='explore' className='hover:underline'>
            Explore
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className='flex-1 bg-white dark:bg-gray-900 p-6 text-black dark:text-white'>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
