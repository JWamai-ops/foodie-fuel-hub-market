
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Sample product data
const products = [
  {
    id: 1,
    name: "Organic Quinoa",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    price: 8.99,
    rating: 4.8,
    reviews: 124,
    badges: ["Organic", "Gluten-Free"],
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Cold-Pressed Olive Oil",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    price: 15.99,
    rating: 4.9,
    reviews: 87,
    badges: ["Organic", "Cold-Pressed"],
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 3,
    name: "Raw Honey",
    image: "https://images.unsplash.com/photo-1563736113551-abeb686862c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    price: 12.49,
    rating: 4.7,
    reviews: 56,
    badges: ["Raw", "Unfiltered"],
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 4,
    name: "Plant-Based Protein Mix",
    image: "https://images.unsplash.com/photo-1622485482968-8cbd91e84cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    price: 24.99,
    rating: 4.6,
    reviews: 43,
    badges: ["Vegan", "Non-GMO"],
    isNew: true,
    isBestSeller: false,
  },
];

const FoodShop = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-foodie-orange-light/30 text-foodie-orange-DEFAULT px-4 py-1 rounded-full text-sm font-medium mb-3">
            Healthy Market
          </span>
          <h2 className="text-3xl font-bold text-foodie-gray-dark mb-4">
            Shop Organic & Natural Foods
          </h2>
          <p className="text-foodie-gray-DEFAULT max-w-2xl mx-auto">
            Discover our curated collection of high-quality, nutrient-rich ingredients and healthy food options
            delivered straight to your door.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-foodie-green-DEFAULT text-white text-xs px-2 py-1 rounded-full font-medium z-10">
                    New
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="absolute top-2 left-2 bg-foodie-orange-DEFAULT text-white text-xs px-2 py-1 rounded-full font-medium z-10">
                    Best Seller
                  </span>
                )}
                <Link to={`/shop/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
              <CardContent className="p-4 flex-grow">
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.badges.map((badge, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs bg-foodie-gray-light/50 text-foodie-gray-dark"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <Link to={`/shop/product/${product.id}`}>
                  <h3 className="font-semibold text-foodie-gray-dark mb-1 hover:text-foodie-green-DEFAULT transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-amber-400 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-xs text-foodie-gray-DEFAULT">({product.reviews} reviews)</span>
                </div>
                <p className="font-bold text-lg text-foodie-gray-dark">
                  ${product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full bg-foodie-green-DEFAULT hover:bg-foodie-green-dark text-white"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            className="border-foodie-orange-DEFAULT text-foodie-orange-DEFAULT hover:bg-foodie-orange-light/10"
            asChild
          >
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodShop;
