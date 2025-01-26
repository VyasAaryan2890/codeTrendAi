import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4 px-6 mt-8 shadow">
    <div className="container mx-auto text-center">
      <p className="mb-4">&copy; 2025 CodeTrendAI. All rights reserved.</p>
      <nav>
        <ul className="flex justify-center gap-4">
          <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
          <li><Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
