
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ChefHat, User } from "lucide-react";
import { Link } from "react-router-dom";

// Sample recipe data
const recipes = [
  {
    id: 1,
    title: "Mediterranean Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    prepTime: "25 mins",
    difficulty: "Easy",
    calories: 320,
    category: "Lunch",
  },
  {
    id: 2,
    title: "Berry Protein Smoothie Bowl",
    image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    prepTime: "10 mins",
    difficulty: "Beginner",
    calories: 280,
    category: "Breakfast",
  },
  {
    id: 3,
    title: "Grilled Salmon with Avocado Salsa",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    prepTime: "30 mins",
    difficulty: "Intermediate",
    calories: 410,
    category: "Dinner",
  },
  {
    id: 4,
    title: "Veggie Buddha Bowl",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    prepTime: "20 mins",
    difficulty: "Easy",
    calories: 350,
    category: "Lunch",
  },
];

const FeaturedRecipes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-foodie-gray-dark mb-2">Popular Recipes</h2>
            <p className="text-foodie-gray-DEFAULT max-w-2xl">
              Discover our most-loved healthy recipes that are both nutritious and delicious. 
              Perfect for any time of day!
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0 border-foodie-green-DEFAULT text-foodie-green-DEFAULT hover:bg-foodie-green-light/10"
            asChild
          >
            <Link to="/recipes">View All Recipes</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <span className="absolute top-2 right-2 bg-white text-foodie-gray-dark text-xs px-2 py-1 rounded-full font-medium z-10">
                  {recipe.category}
                </span>
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-foodie-gray-dark mb-3">
                  {recipe.title}
                </h3>
                <div className="flex justify-between text-sm text-foodie-gray-DEFAULT">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-foodie-green-DEFAULT" />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center">
                    <ChefHat className="w-4 h-4 mr-1 text-foodie-orange-DEFAULT" />
                    <span>{recipe.difficulty}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-foodie-brown-DEFAULT"><path d="M17.2 5c.5 1 .8 2.2.8 3.4 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.56 0 1.1.06 1.62.18"/><path d="M11.4 7.2c-.4.4-.6.9-.6 1.55 0 .79.41 1.4.8 1.97.4.56.8 1.03.8 1.28 0 .39-.32.7-.7.7a.71.71 0 0 1-.7-.7"/><path d="M10 5.5v-1c0-.27.21-.5.5-.5h0c.27 0 .5.2.5.5v1c0 .27-.21.5-.5.5h0c-.27 0-.5-.2-.5-.5Z"/><path d="m18 10 4-2.3"/><path d="m18 6-4-2.3"/><path d="M18 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/></svg>
                    <span>{recipe.calories}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-4 pb-4 pt-0">
                <Button 
                  className="w-full bg-foodie-green-DEFAULT hover:bg-foodie-green-dark text-white"
                  asChild
                >
                  <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
