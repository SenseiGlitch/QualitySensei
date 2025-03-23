import features from "@/data/features.json";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
  linkText: string;
}

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text gradient-text-primary">What QualitySensei Offers</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive platform for mastering software testing with structured learning and hands-on practice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature: Feature, index: number) => (
            <div 
              key={feature.id} 
              className={`bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg card-hover fade-in-up delay-${(index + 1) * 100}`}
            >
              <div 
                className={`inline-flex items-center justify-center w-12 h-12 rounded-md ${feature.color} mb-6 pulse`}
                dangerouslySetInnerHTML={{ __html: feature.icon }}
              />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
              <Link href={feature.link} 
                className={`inline-flex items-center ${feature.color.includes("primary") ? "text-primary-600 dark:text-primary-400" : feature.color.includes("secondary") ? "text-secondary-600 dark:text-secondary-400" : "text-purple-600 dark:text-purple-400"} font-medium hover:underline`}>
                {feature.linkText}
                <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
