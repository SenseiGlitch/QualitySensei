import { CoursesSection } from "@/components/sections/courses-section";
import { CTASection } from "@/components/sections/cta-section";
import { Helmet } from 'react-helmet';

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses - QualitySensei</title>
        <meta name="description" content="Browse our comprehensive software testing courses, from manual to automation testing." />
        <meta property="og:title" content="Software Testing Courses - QualitySensei" />
        <meta property="og:description" content="Expand your QA skills with structured courses covering manual, automation, API, and performance testing." />
      </Helmet>
      
      <section className="bg-gradient-to-b from-purple-900 to-purple-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Software Testing Courses</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            From manual testing fundamentals to advanced automation frameworks, our courses will take your QA skills to the next level.
          </p>
        </div>
      </section>
      
      <CoursesSection />
      <CTASection />
    </>
  );
}
