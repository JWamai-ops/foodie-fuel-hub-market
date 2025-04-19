
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-foodie-green-light/20 to-foodie-orange-light/20 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foodie-gray-dark">
              Fuel Your Body with <span className="text-foodie-green-DEFAULT">Healthy</span> &{" "}
              <span className="text-foodie-orange-DEFAULT">Delicious</span> Food
            </h1>
            <p className="text-lg mb-8 text-foodie-gray-DEFAULT leading-relaxed max-w-lg">
              Your one-stop destination for recipes, meal plans, healthy food products,
              and tools to track your nutrition journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-foodie-green-DEFAULT hover:bg-foodie-green-dark text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link to="/recipes">Explore Recipes</Link>
              </Button>
              <Button
                variant="outline"
                className="border-foodie-orange-DEFAULT text-foodie-orange-DEFAULT hover:bg-foodie-orange-light/10 hover:text-foodie-orange-dark text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link to="/meal-plans">
                  View Meal Plans <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Fresh healthy food"
              className="rounded-xl shadow-2xl max-h-[500px] w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-foodie-green-light/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foodie-green-DEFAULT"><path d="M12 19c0-4.2-2.8-7.7-7-8.6"/><path d="M12 19V5"/><path d="M12 19c0-4.2 2.8-7.7 7-8.6"/></svg>
                </div>
                <div>
                  <p className="text-foodie-gray-dark font-medium">Personalized</p>
                  <p className="text-sm text-foodie-gray-DEFAULT">Meal Plans</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-foodie-orange-light/30 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foodie-orange-DEFAULT"><path d="M4 11h16a1 1 0 0 1 1 1v.5a1.5 1.5 0 0 1-1.5 1.5H15"/><path d="M10 14v-4a2 2 0 0 1 4 0v4"/><path d="M6 11V8h12v3"/><path d="M4 11a17 17 0 0 0 .67 5"/><path d="M14 17v3"/><path d="M10 20a2 2 0 0 1-2-2v-6"/></svg>
                </div>
                <div>
                  <p className="text-foodie-gray-dark font-medium">Organic</p>
                  <p className="text-sm text-foodie-gray-DEFAULT">Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
