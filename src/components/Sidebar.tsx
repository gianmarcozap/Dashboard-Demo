import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-white w-60 h-screen shadow-md fixed top-0 left-0 z-10">
      <div className="p-4 text-xl font-bold border-b">📊 Dashboard BI</div>
      <nav className="flex flex-col p-4 gap-3 text-gray-700 text-sm">
        <NavLink to="/dashboard" className="hover:text-blue-600">Dashboard</NavLink>
        <NavLink to="/reports" className="hover:text-blue-600">Reports</NavLink>
        <NavLink to="/settings" className="hover:text-blue-600">Configuration</NavLink>
      </nav>
    <button
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 rounded transition-colors"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
      </svg>
      Log out
    </button>
    </aside>
  );
};

export default Sidebar;
