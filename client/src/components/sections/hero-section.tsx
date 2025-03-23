import { Button } from "@/components/ui/button";
import { Terminal } from "@/components/ui/terminal";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-16 md:pt-24 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100/40 dark:from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-16 text-center">
          <div className="inline-block mb-6 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800">
            <span className="text-purple-800 dark:text-purple-300 text-sm font-medium flex items-center">
              Latest Version 5.5
              <span className="ml-2 px-1.5 py-0.5 text-xs rounded bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200">
                NEW
              </span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Master software testing<br className="hidden md:block" /> with <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-700 to-purple-800">QualitySensei</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Structured courses, hands-on labs, and expert-written blogs to take your QA skills from beginner to advanced. Built with Astro and React 19.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/courses">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-900 via-purple-700 to-purple-800 hover:opacity-90 text-white px-6 py-6 h-auto">
                Explore Courses
              </Button>
            </Link>
            <Link href="/labs">
              <Button variant="outline" className="w-full sm:w-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-6 h-auto">
                Try Free Lab
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Terminal Component */}
        <Terminal className="mb-16" />
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Trusted by testing teams worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70 dark:opacity-50">
            <div className="flex justify-center">
              <img className="h-8" src="https://simpleicons.org/icons/google.svg" alt="Google" />
            </div>
            <div className="flex justify-center">
              <img className="h-8" src="https://simpleicons.org/icons/microsoft.svg" alt="Microsoft" />
            </div>
            <div className="flex justify-center">
              <img className="h-8" src="https://simpleicons.org/icons/apple.svg" alt="Apple" />
            </div>
            <div className="flex justify-center">
              <img className="h-8" src="https://simpleicons.org/icons/amazon.svg" alt="Amazon" />
            </div>
            <div className="flex justify-center">
              <img className="h-8" src="https://simpleicons.org/icons/meta.svg" alt="Meta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
