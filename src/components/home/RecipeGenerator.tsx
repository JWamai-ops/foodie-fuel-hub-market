
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Utensils } from "lucide-react";
import { useState } from "react";

// Sample diet preferences
const dietPreferences = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "dairy-free", label: "Dairy-Free" },
  { id: "keto", label: "Keto" },
  { id: "paleo", label: "Paleo" },
  { id: "low-carb", label: "Low Carb" },
];

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState("");
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
  const [generatedRecipe, setGeneratedRecipe] = useState<null | {
    title: string;
    ingredients: string[];
    instructions: string[];
    cookTime: string;
    calories: number;
  }>(null);

  const handleGenerateRecipe = () => {
    // This would normally call an API, but for demo purposes we'll use a mock response
    setGeneratedRecipe({
      title: "Roasted Vegetable & Quinoa Bowl",
      ingredients: [
        "1 cup quinoa, rinsed",
        "2 cups vegetable broth",
        "1 bell pepper, sliced",
        "1 zucchini, sliced",
        "1 red onion, sliced",
        "2 tbsp olive oil",
        "1 tsp cumin",
        "1 tsp paprika",
        "Salt and pepper to taste",
        "1/4 cup fresh cilantro, chopped",
        "1 avocado, sliced",
        "Lemon juice to taste"
      ],
      instructions: [
        "Preheat oven to 425°F (220°C).",
        "Cook quinoa in vegetable broth according to package instructions.",
        "Toss vegetables with olive oil, cumin, paprika, salt, and pepper on a baking sheet.",
        "Roast vegetables for 20-25 minutes until tender and slightly charred.",
        "Combine cooked quinoa and roasted vegetables in a bowl.",
        "Top with fresh cilantro and avocado slices.",
        "Drizzle with lemon juice before serving."
      ],
      cookTime: "35 minutes",
      calories: 320
    });
  };

  return (
    <section className="py-16 bg-foodie-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-foodie-green-light/30 text-foodie-green-DEFAULT px-4 py-1 rounded-full text-sm font-medium mb-3">
            Recipe AI
          </span>
          <h2 className="text-3xl font-bold text-foodie-gray-dark mb-4">
            Generate Custom Recipes
          </h2>
          <p className="text-foodie-gray-DEFAULT max-w-2xl mx-auto">
            Don't know what to cook? Enter ingredients you have on hand and we'll generate a 
            delicious, healthy recipe tailored to your preferences!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="mb-6">
              <Label htmlFor="ingredients" className="text-foodie-gray-dark mb-2 block font-medium">
                What ingredients do you have?
              </Label>
              <Input
                id="ingredients"
                placeholder="e.g., chicken, spinach, sweet potatoes"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className="w-full"
              />
              <p className="mt-2 text-sm text-foodie-gray-DEFAULT">
                Separate ingredients with commas
              </p>
            </div>

            <div className="mb-6">
              <Label className="text-foodie-gray-dark mb-2 block font-medium">
                Dietary Preferences
              </Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {dietPreferences.map((preference) => (
                  <div key={preference.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={preference.id} 
                      checked={selectedDiets.includes(preference.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedDiets([...selectedDiets, preference.id]);
                        } else {
                          setSelectedDiets(selectedDiets.filter(id => id !== preference.id));
                        }
                      }}
                    />
                    <Label 
                      htmlFor={preference.id}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {preference.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className="w-full bg-foodie-green-DEFAULT hover:bg-foodie-green-dark text-white"
              onClick={handleGenerateRecipe}
            >
              <ChefHat className="mr-2 h-4 w-4" />
              Generate Recipe
            </Button>
          </div>

          <div>
            {generatedRecipe ? (
              <Card className="bg-white overflow-hidden">
                <div className="bg-foodie-green-DEFAULT p-4 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">{generatedRecipe.title}</h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <span>{generatedRecipe.cookTime}</span>
                      <span>•</span>
                      <span>{generatedRecipe.calories} cal</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-foodie-gray-dark flex items-center mb-3">
                      <Utensils className="h-4 w-4 mr-2 text-foodie-orange-DEFAULT" />
                      Ingredients
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-foodie-gray-DEFAULT">
                      {generatedRecipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foodie-gray-dark flex items-center mb-3">
                      <ChefHat className="h-4 w-4 mr-2 text-foodie-orange-DEFAULT" />
                      Instructions
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-foodie-gray-DEFAULT">
                      {generatedRecipe.instructions.map((step, index) => (
                        <li key={index} className="pb-2">{step}</li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex flex-col items-center justify-center bg-white p-10 rounded-xl shadow-md text-center">
                <ChefHat className="h-16 w-16 text-foodie-gray-DEFAULT mb-4 opacity-20" />
                <h3 className="text-xl font-semibold text-foodie-gray-dark mb-2">
                  Your Recipe Will Appear Here
                </h3>
                <p className="text-foodie-gray-DEFAULT">
                  Fill in your ingredients and preferences, then click "Generate Recipe"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeGenerator;
