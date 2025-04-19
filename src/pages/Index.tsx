
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import RecipeGenerator from "@/components/home/RecipeGenerator";
import MealPlanSection from "@/components/home/MealPlanSection";
import BlogPreview from "@/components/home/BlogPreview";
import FoodShop from "@/components/home/FoodShop";
import CalorieTracker from "@/components/home/CalorieTracker";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedRecipes />
        <RecipeGenerator />
        <MealPlanSection />
        <BlogPreview />
        <FoodShop />
        <CalorieTracker />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
