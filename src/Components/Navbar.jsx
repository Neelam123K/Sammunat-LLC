import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        
        <h1 className="text-xl font-bold">
          <Link to="/">SAMMUNAT LLC</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link className="hover:text-sky-400" to="/">Home</Link></li>
          <li><Link className="hover:text-sky-400" to="/about">About</Link></li>
          <li><Link className="hover:text-sky-400" to="/services">Services</Link></li>
          <li><Link className="hover:text-sky-400" to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

       {/* Mobile Menu  */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 px-2">
          <li><Link onClick={() => setIsOpen(false)} to="/">Home</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/about">About</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/services">Services</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
