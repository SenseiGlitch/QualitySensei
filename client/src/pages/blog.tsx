import { BlogSection } from "@/components/sections/blog-section";
import { CTASection } from "@/components/sections/cta-section";
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import blogs from "@/data/blogs.json";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Testing Blog - QualitySensei</title>
        <meta name="description" content="Expert insights and tutorials on software testing methodologies and best practices." />
        <meta property="og:title" content="Software Testing Blog - QualitySensei" />
        <meta property="og:description" content="Read expert articles on manual testing, test automation, API testing, and performance testing." />
      </Helmet>
      
      <section className="bg-gradient-to-b from-purple-900 to-purple-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Software Testing Blog</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Expert insights, tutorials, and best practices to advance your software testing knowledge.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/50">
              All Topics
            </Button>
            <Button variant="ghost" className="hover:bg-white/10">
              Test Automation
            </Button>
            <Button variant="ghost" className="hover:bg-white/10">
              API Testing
            </Button>
            <Button variant="ghost" className="hover:bg-white/10">
              Performance
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured blog post */}
          {blogs.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-10 pb-2 border-b border-gray-200 dark:border-gray-700">Featured Article</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={blogs[0].image} 
                    alt={blogs[0].title}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {blogs[0].date} • {blogs[0].readTime}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{blogs[0].title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {blogs[0].description}
                  </p>
                  <Button className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-800 hover:opacity-90 transition-opacity text-white">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Blog listing */}
          <BlogSection />
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
