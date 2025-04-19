
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Superfoods You Should Add to Your Diet Today",
    excerpt: "Discover the power-packed foods that can boost your health and wellbeing in surprising ways.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    date: "May 15, 2023",
    category: "Nutrition",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Science Behind Intermittent Fasting",
    excerpt: "Is intermittent fasting just a trend or is there real science to back its benefits? We explore the research.",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    date: "June 2, 2023",
    category: "Health",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Meal Prep Basics: Save Time and Eat Well",
    excerpt: "Learn the fundamentals of efficient meal prepping to ensure you eat healthy all week with minimal effort.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    date: "June 18, 2023",
    category: "Lifestyle",
    readTime: "6 min read"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-16 bg-foodie-gray-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <span className="inline-block bg-foodie-brown-light/30 text-foodie-brown-DEFAULT px-4 py-1 rounded-full text-sm font-medium mb-3">
              Our Blog
            </span>
            <h2 className="text-3xl font-bold text-foodie-gray-dark mb-2">Latest Health & Nutrition Articles</h2>
            <p className="text-foodie-gray-DEFAULT max-w-2xl">
              Explore our latest articles for insights on nutrition, healthy cooking, 
              and sustainable eating practices.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0 border-foodie-brown-DEFAULT text-foodie-brown-DEFAULT hover:bg-foodie-brown-light/10"
            asChild
          >
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Link to={`/blog/${post.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <span className="absolute top-2 left-2 bg-white text-foodie-gray-dark text-xs px-2 py-1 rounded-full font-medium z-10">
                    {post.category}
                  </span>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-foodie-gray-DEFAULT mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <FileText className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="block">
                  <h3 className="font-semibold text-xl text-foodie-gray-dark mb-3 hover:text-foodie-green-DEFAULT transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-foodie-gray-DEFAULT mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-foodie-green-DEFAULT hover:text-foodie-green-dark font-medium"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
