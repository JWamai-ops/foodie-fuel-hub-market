
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MealPlans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-foodie-orange-light/20 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foodie-gray-dark mb-4">Personalized Meal Plans</h1>
            <p className="text-foodie-gray-DEFAULT max-w-2xl mx-auto">
              Take the guesswork out of healthy eating with our customized meal plans.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <p className="text-center text-xl">Detailed meal plans coming soon!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MealPlans;
