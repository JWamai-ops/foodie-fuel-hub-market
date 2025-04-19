
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foodie-gray-light text-foodie-gray-dark pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foodie-green-DEFAULT mb-4">Foodie Fuel Hub</h3>
            <p className="mb-4">Your one-stop destination for healthy eating, meal planning, and nutritious food products.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-foodie-green-DEFAULT hover:text-foodie-green-dark transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-foodie-green-DEFAULT hover:text-foodie-green-dark transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-foodie-green-DEFAULT hover:text-foodie-green-dark transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.9 8-5 1.5 1.4 2 3.4 2 5z"/></svg>
              </a>
              <a href="#" className="text-foodie-green-DEFAULT hover:text-foodie-green-dark transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-foodie-green-DEFAULT transition">Home</Link></li>
              <li><Link to="/recipes" className="hover:text-foodie-green-DEFAULT transition">Recipes</Link></li>
              <li><Link to="/blog" className="hover:text-foodie-green-DEFAULT transition">Blog</Link></li>
              <li><Link to="/meal-plans" className="hover:text-foodie-green-DEFAULT transition">Meal Plans</Link></li>
              <li><Link to="/shop" className="hover:text-foodie-green-DEFAULT transition">Shop</Link></li>
              <li><Link to="/calorie-tracker" className="hover:text-foodie-green-DEFAULT transition">Calorie Tracker</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-foodie-green-DEFAULT transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-foodie-green-DEFAULT transition">FAQs</a></li>
              <li><a href="#" className="hover:text-foodie-green-DEFAULT transition">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-foodie-green-DEFAULT transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foodie-green-DEFAULT transition">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to get special offers, free giveaways, and health tips.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-foodie-green-DEFAULT focus:border-transparent w-full"
              />
              <button className="bg-foodie-green-DEFAULT hover:bg-foodie-green-dark text-white px-4 py-2 rounded-r-md transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-10 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Foodie Fuel Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
