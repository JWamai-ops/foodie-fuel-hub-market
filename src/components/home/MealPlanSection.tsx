
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

// Sample meal plans
const mealPlans = [
  {
    id: 1,
    name: "Basic",
    price: 9.99,
    description: "Perfect for beginners starting their health journey",
    features: [
      "7-day meal plans",
      "Simple, 30-minute recipes",
      "Basic nutritional guidance",
      "Weekly shopping lists",
      "Email support"
    ],
    featured: false
  },
  {
    id: 2,
    name: "Premium",
    price: 19.99,
    description: "Our most popular plan with personalized options",
    features: [
      "14-day customizable meal plans",
      "Dietary preference options",
      "Detailed nutritional analysis",
      "Interactive shopping lists",
      "Recipe substitution options",
      "Access to recipe database",
      "Priority email support"
    ],
    featured: true
  },
  {
    id: 3,
    name: "Ultimate",
    price: 29.99,
    description: "Complete personalization for nutrition optimization",
    features: [
      "30-day personalized meal plans",
      "Custom macronutrient ratios",
      "Calorie-specific options",
      "All premium features",
      "One-on-one consultation",
      "Phone & email support",
      "Exclusive recipes & content"
    ],
    featured: false
  }
];

const MealPlanSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-foodie-orange-light/30 text-foodie-orange-DEFAULT px-4 py-1 rounded-full text-sm font-medium mb-3">
            Subscription Plans
          </span>
          <h2 className="text-3xl font-bold text-foodie-gray-dark mb-4">
            Personalized Meal Plans
          </h2>
          <p className="text-foodie-gray-DEFAULT max-w-2xl mx-auto">
            Take the guesswork out of healthy eating with our customized meal plans. 
            Designed by nutritionists to fit your lifestyle and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mealPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative overflow-hidden ${
                plan.featured ? 'border-foodie-green-DEFAULT shadow-lg' : 'border-gray-200'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-foodie-green-DEFAULT text-white px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foodie-gray-dark mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foodie-gray-dark">${plan.price}</span>
                  <span className="text-foodie-gray-DEFAULT">/month</span>
                </div>
                <p className="text-foodie-gray-DEFAULT mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-foodie-green-DEFAULT shrink-0 mr-2" />
                      <span className="text-foodie-gray-DEFAULT">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  className={`w-full ${
                    plan.featured 
                      ? 'bg-foodie-green-DEFAULT hover:bg-foodie-green-dark' 
                      : 'bg-foodie-gray-light text-foodie-gray-dark hover:bg-foodie-gray-DEFAULT/20'
                  }`}
                  asChild
                >
                  <Link to={`/meal-plans/${plan.id}`}>Choose Plan</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealPlanSection;
