import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Courses from "@/pages/courses";
import Labs from "@/pages/labs";
import Blog from "@/pages/blog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "./context/theme-provider";
import { useEffect } from "react";
import { initAnimations } from "./lib/animations";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/labs" component={Labs} />
      <Route path="/blog" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize animations
  useEffect(() => {
    // Initialize animations on mount
    initAnimations();
  }, []);
  
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
