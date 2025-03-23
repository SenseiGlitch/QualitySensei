import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start your QA journey today</h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of testers who are mastering software testing skills and advancing their careers with QualitySensei.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="px-8 py-4 h-auto bg-white text-purple-700 font-medium hover:bg-opacity-90 transition-opacity">
              Create Free Account
            </Button>
            <Link href="/courses">
              <Button variant="outline" className="px-8 py-4 h-auto bg-transparent border border-white font-medium hover:bg-white/10 transition-colors">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
