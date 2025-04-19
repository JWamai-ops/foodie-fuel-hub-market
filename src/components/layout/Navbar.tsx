
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-foodie-green-DEFAULT">Foodie Fuel Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/recipes" className="text-foodie-gray-dark hover:text-foodie-green-DEFAULT transition">
            Recipes
          </Link>
          <Link to="/blog" className="text-foodie-gray-dark hover:text-foodie-green-DEFAULT transition">
            Blog
          </Link>
          <Link to="/meal-plans" className="text-foodie-gray-dark hover:text-foodie-green-DEFAULT transition">
            Meal Plans
          </Link>
          <Link to="/shop" className="text-foodie-gray-dark hover:text-foodie-green-DEFAULT transition">
            Shop
          </Link>
          <Link to="/calorie-tracker" className="text-foodie-gray-dark hover:text-foodie-green-DEFAULT transition">
            Calorie Tracker
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5 text-foodie-gray-dark" />
            </Button>
          </Link>
          <Button className="hidden md:inline-flex bg-foodie-green-DEFAULT hover:bg-foodie-green-dark text-white">
            Sign In
          </Button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foodie-gray-dark"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/recipes" 
              className="text-foodie-gray-dark hover:text-foodie-green-DEFAULT py-2 transition"
              onClick={toggleMenu}
            >
              Recipes
            </Link>
            <Link 
              to="/blog" 
              className="text-foodie-gray-dark hover:text-foodie-green-DEFAULT py-2 transition"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              to="/meal-plans" 
              className="text-foodie-gray-dark hover:text-foodie-green-DEFAULT py-2 transition"
              onClick={toggleMenu}
            >
              Meal Plans
            </Link>
            <Link 
              to="/shop" 
              className="text-foodie-gray-dark hover:text-foodie-green-DEFAULT py-2 transition"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link 
              to="/calorie-tracker" 
              className="text-foodie-gray-dark hover:text-foodie-green-DEFAULT py-2 transition"
              onClick={toggleMenu}
            >
              Calorie Tracker
            </Link>
            <Button className="bg-foodie-green-DEFAULT hover:bg-foodie-green-dark text-white w-full">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
