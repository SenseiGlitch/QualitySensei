import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CoursesSection } from "@/components/sections/courses-section";
import { BlogSection } from "@/components/sections/blog-section";
import { CTASection } from "@/components/sections/cta-section";
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>QualitySensei - Master Software Testing Skills</title>
        <meta name="description" content="Learn software testing from beginner to advanced with QualitySensei's courses, labs, and expert-written articles." />
        <meta property="og:title" content="QualitySensei - Master Software Testing Skills" />
        <meta property="og:description" content="High-performance educational platform for software testing skills with courses, hands-on labs, and expert resources." />
      </Helmet>
      
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
