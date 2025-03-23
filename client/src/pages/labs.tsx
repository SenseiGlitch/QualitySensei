import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import { Helmet } from 'react-helmet';
import { ArrowRight, BeakerIcon } from "lucide-react";

// Simulated labs data
const labs = [
  {
    id: 1,
    title: "Web Application Testing Lab",
    description: "Practice testing techniques on a real e-commerce application with pre-seeded defects.",
    difficulty: "Beginner",
    estimatedTime: "2 hours",
    skills: ["Manual Testing", "Test Cases", "Bug Reporting"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
  },
  {
    id: 2,
    title: "API Testing Challenge",
    description: "Learn to test RESTful APIs using Postman and automated test scripts.",
    difficulty: "Intermediate",
    estimatedTime: "3 hours",
    skills: ["API Testing", "Postman", "JSON Validation"],
    image: "https://images.unsplash.com/photo-1581092921461-7d55b9cd5ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Performance Testing Workshop",
    description: "Hands-on practice with JMeter to identify and analyze performance bottlenecks.",
    difficulty: "Advanced",
    estimatedTime: "4 hours",
    skills: ["Load Testing", "JMeter", "Performance Analysis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

export default function Labs() {
  return (
    <>
      <Helmet>
        <title>Practical Testing Labs - QualitySensei</title>
        <meta name="description" content="Hands-on labs for practicing software testing skills in real-world scenarios." />
        <meta property="og:title" content="Practical Testing Labs - QualitySensei" />
        <meta property="og:description" content="Apply your testing knowledge with interactive labs designed to simulate real-world testing scenarios." />
      </Helmet>
      
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Practical Testing Labs</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Apply your knowledge with hands-on labs designed to simulate real-world testing scenarios.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {labs.map((lab) => (
              <div key={lab.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={lab.image} 
                    alt={lab.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      lab.difficulty === "Beginner" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" :
                      lab.difficulty === "Intermediate" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" :
                      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                    }`}>
                      {lab.difficulty}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{lab.estimatedTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{lab.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {lab.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {lab.skills.map((skill, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:opacity-90 transition-opacity text-white">
                    Start Lab <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Want to suggest a lab?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              If you have ideas for practical testing scenarios that would benefit the community, we'd love to hear from you!
            </p>
            <Button variant="outline" className="inline-flex items-center">
              <BeakerIcon className="mr-2 h-5 w-5" /> Suggest a Lab
            </Button>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
