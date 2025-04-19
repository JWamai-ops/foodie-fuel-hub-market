
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { BarChart, Carrot, Apple, Scale } from "lucide-react";

const CalorieTracker = () => {
  // Mock data for display purposes
  const dailyGoal = 2000;
  const currentCalories = 1450;
  const progress = (currentCalories / dailyGoal) * 100;
  
  const macros = {
    protein: { goal: 150, current: 95 },
    carbs: { goal: 225, current: 180 },
    fat: { goal: 65, current: 42 }
  };

  return (
    <section className="py-16 bg-foodie-gray-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-foodie-green-light/20">
        <Scale className="h-40 w-40" />
      </div>
      <div className="absolute bottom-10 left-10 text-foodie-orange-light/20">
        <Apple className="h-32 w-32" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-foodie-green-light/30 text-foodie-green-DEFAULT px-4 py-1 rounded-full text-sm font-medium mb-3">
            Nutrition Tracking
          </span>
          <h2 className="text-3xl font-bold text-foodie-gray-dark mb-4">
            Track Your Calories & Macros
          </h2>
          <p className="text-foodie-gray-DEFAULT max-w-2xl mx-auto">
            Stay on top of your nutrition goals with our easy-to-use calorie and macronutrient tracker. 
            Monitor your food intake and make informed choices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foodie-gray-dark mb-6">
              Features of Our Calorie Tracker
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-foodie-green-light/30 p-3 rounded-full mr-4">
                  <BarChart className="h-6 w-6 text-foodie-green-DEFAULT" />
                </div>
                <div>
                  <h4 className="font-semibold text-foodie-gray-dark mb-1">Detailed Nutrition Analytics</h4>
                  <p className="text-foodie-gray-DEFAULT">
                    Track calories, macros, and micronutrients with easy-to-read charts and reports.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-foodie-orange-light/30 p-3 rounded-full mr-4">
                  <Carrot className="h-6 w-6 text-foodie-orange-DEFAULT" />
                </div>
                <div>
                  <h4 className="font-semibold text-foodie-gray-dark mb-1">Extensive Food Database</h4>
                  <p className="text-foodie-gray-DEFAULT">
                    Access a database of thousands of foods with complete nutritional information.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-foodie-brown-light/30 p-3 rounded-full mr-4">
                  <Scale className="h-6 w-6 text-foodie-brown-DEFAULT" />
                </div>
                <div>
                  <h4 className="font-semibold text-foodie-gray-dark mb-1">Personalized Goal Setting</h4>
                  <p className="text-foodie-gray-DEFAULT">
                    Set customized nutrition goals based on your body, activity level, and health objectives.
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              className="mt-8 bg-foodie-green-DEFAULT hover:bg-foodie-green-dark text-white"
              size="lg"
              asChild
            >
              <Link to="/calorie-tracker">Start Tracking Now</Link>
            </Button>
          </div>
          
          <Card className="shadow-lg overflow-hidden">
            <div className="bg-foodie-green-DEFAULT p-6 text-white">
              <h3 className="text-xl font-bold mb-1">Daily Nutrition Summary</h3>
              <p>Track your progress toward your daily goals</p>
            </div>
            <CardContent className="p-6">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foodie-gray-dark">Calories</span>
                  <span className="text-foodie-gray-DEFAULT">{currentCalories} / {dailyGoal}</span>
                </div>
                <Progress value={progress} className="h-3" />
                <div className="mt-2 text-sm text-foodie-gray-DEFAULT text-right">
                  {(dailyGoal - currentCalories)} calories remaining
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foodie-gray-dark">Protein</span>
                    <span className="text-foodie-gray-DEFAULT">{macros.protein.current}g / {macros.protein.goal}g</span>
                  </div>
                  <Progress value={(macros.protein.current / macros.protein.goal) * 100} className="h-2 bg-foodie-gray-light/50" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foodie-gray-dark">Carbs</span>
                    <span className="text-foodie-gray-DEFAULT">{macros.carbs.current}g / {macros.carbs.goal}g</span>
                  </div>
                  <Progress value={(macros.carbs.current / macros.carbs.goal) * 100} className="h-2 bg-foodie-gray-light/50" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foodie-gray-dark">Fat</span>
                    <span className="text-foodie-gray-DEFAULT">{macros.fat.current}g / {macros.fat.goal}g</span>
                  </div>
                  <Progress value={(macros.fat.current / macros.fat.goal) * 100} className="h-2 bg-foodie-gray-light/50" />
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    className="border-foodie-green-DEFAULT text-foodie-green-DEFAULT hover:bg-foodie-green-light/10"
                    asChild
                  >
                    <Link to="/calorie-tracker/log">Log Food</Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-foodie-orange-DEFAULT text-foodie-orange-DEFAULT hover:bg-foodie-orange-light/10"
                    asChild
                  >
                    <Link to="/calorie-tracker/stats">View Stats</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalorieTracker;
