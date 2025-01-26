import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white py-4 px-6 shadow">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">CodeTrendAI</div>
      <nav>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-gray-400">Learning Dashboard</Link></li>
          <li><Link to="/trends" className="hover:text-gray-400">Trends</Link></li>
          <li><Link to="/community" className="hover:text-gray-400">Community</Link></li>
          <li><Link to="/auth" className="hover:text-gray-400">Sign In / Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
