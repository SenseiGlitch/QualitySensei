import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import blogs from "@/data/blogs.json";
import { ArrowRight } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
}

export function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest from the Blog</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Expert insights and tutorials to enhance your software testing knowledge.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: Blog) => (
            <article key={blog.id} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {blog.description}
                </p>
              </div>
              
              <div className="px-6 pb-6 mt-auto">
                <Link href={`/blog/${blog.id}`}>
                  <a className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="outline" className="inline-flex items-center px-6 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-purple-600 dark:text-purple-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              View All Articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
