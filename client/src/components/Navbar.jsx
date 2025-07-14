import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 border-b border-gray-700">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white tracking-wider">
              CUBE
            </span>
          </Link>
        </div>
        
        {/* Navigation Links and Get Started Button */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Portfolio
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>
          
          {/* Get Started Button */}
          <Link 
            to="/dashboard" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white hover:text-blue-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;