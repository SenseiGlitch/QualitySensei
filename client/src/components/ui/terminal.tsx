import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import quotes from "@/data/quotes.json";

interface TerminalProps {
  className?: string;
}

export function Terminal({ className }: TerminalProps) {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingSpeed = useRef<number>(50);
  const charIndex = useRef<number>(0);

  // Get a random quote
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setFullText(randomQuote);
  }, []);

  // Typing animation
  useEffect(() => {
    if (!fullText) return;
    
    setIsTyping(true);
    
    const typingInterval = setInterval(() => {
      if (charIndex.current < fullText.length) {
        setText(prev => prev + fullText.charAt(charIndex.current));
        charIndex.current += 1;
        
        // Random typing speed for realism
        typingSpeed.current = Math.random() * 30 + 30;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, typingSpeed.current);
    
    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className={cn("max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl", className)}>
      <div className="bg-gray-800 dark:bg-gray-900 text-white flex items-center px-4 py-2">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs font-mono opacity-80">~/quality-sensei</div>
      </div>
      
      <div className="bg-gray-900 dark:bg-black p-4 font-mono text-sm">
        <div className="text-gray-300 space-y-2">
          <div>
            <span className="text-green-400">$</span> <span className="text-blue-400">quality-sensei</span> <span>--version</span>
          </div>
          <div>
            <span className="text-white">QualitySensei v5.5.0</span>
          </div>
          <div>
            <span className="text-green-400">$</span> <span className="text-blue-400">quality-sensei</span> <span>--quote</span>
          </div>
          <div>
            <span className="text-white inline-block">
              {text}
            </span>
            <span className={`border-r-2 h-5 ml-0.5 ${isTyping ? 'animate-blink' : ''}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
