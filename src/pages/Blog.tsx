
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-foodie-brown-light/20 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foodie-gray-dark mb-4">Health & Nutrition Blog</h1>
            <p className="text-foodie-gray-DEFAULT max-w-2xl mx-auto">
              Insights, tips, and stories to help you on your health journey.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <p className="text-center text-xl">Blog posts coming soon!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
