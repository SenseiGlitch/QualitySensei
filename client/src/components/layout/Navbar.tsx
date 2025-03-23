import { useState } from "react";
import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <Logo />
              </div>
            </Link>
            
            <div className="hidden md:flex ml-10 space-x-6">
              <Link href="/courses">
                <div className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">
                  Courses
                </div>
              </Link>
              <Link href="/labs">
                <div className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">
                  Labs
                </div>
              </Link>
              <Link href="/blog">
                <div className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">
                  Blog
                </div>
              </Link>
              <div className="font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">
                Resources
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Button className="hidden sm:flex bg-gradient-to-r from-purple-900 via-purple-700 to-purple-800 hover:opacity-90 transition-opacity text-white">
              Get Started
            </Button>
            
            <Button
              variant="ghost" 
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-3">
              <Link href="/courses">
                <div className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md cursor-pointer">Courses</div>
              </Link>
              <Link href="/labs">
                <div className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md cursor-pointer">Labs</div>
              </Link>
              <Link href="/blog">
                <div className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md cursor-pointer">Blog</div>
              </Link>
              <div className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md cursor-pointer">Resources</div>
              <Button className="mx-4 mt-2 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-800 hover:opacity-90 transition-opacity text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
