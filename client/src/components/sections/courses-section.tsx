import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import courses from "@/data/courses.json";
import { ArrowRight, Star } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  level: string;
  levelColor: string;
  rating: number;
  reviews: number;
  price: string | number;
  buttonText: string;
  gradientClass: string;
}

export function CoursesSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Popular Courses</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Structured learning paths to master software testing from fundamentals to advanced techniques.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course: Course) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className={`h-48 relative ${course.gradientClass} overflow-hidden`}>
                <img 
                  src={course.image} 
                  alt={course.title}
                  width="800"
                  height="450"
                  className="w-full h-full object-cover mix-blend-overlay"
                  loading="lazy"
                />
                <div className={`absolute top-4 right-4 bg-white dark:bg-gray-800 ${course.levelColor} px-2 py-1 rounded-md text-sm font-medium`}>
                  {course.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(course.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">{course.rating.toFixed(1)} ({course.reviews} reviews)</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">
                    {typeof course.price === "number" ? `$${course.price.toFixed(2)}` : course.price}
                  </span>
                  <Button className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-800 hover:opacity-90 transition-opacity text-white">
                    {course.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/courses">
            <Button variant="outline" className="inline-flex items-center px-6 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-purple-600 dark:text-purple-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              View All Courses
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
