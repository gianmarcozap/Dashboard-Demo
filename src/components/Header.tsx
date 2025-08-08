const Header = () => {
  const user = localStorage.getItem('user');

  return (
    <header className="ml-60 p-6 bg-gray-100 shadow-sm">
      <h1 className="text-2xl font-semibold text-gray-800">
        👋 Welcome, {user || 'Invitado'}
      </h1>
    </header>
  );
};

export default Header;
