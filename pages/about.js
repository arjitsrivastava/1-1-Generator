import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function About() {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    // Add a small delay before showing the content for a smoother fade-in effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="font-sans bg-darkBlue min-h-screen flex flex-col justify-center items-center text-lightCyan px-4 py-8">
      <Head>
        <title>Say hello!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={`text-lightCyan text-lg text-center font-extrabold mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        Wie geht&apos;s?
      </h1>

      <div className={`mb-8 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
        <h2 className="font-bold text-neonGreen transition-all duration-300 hover:scale-105 transform">About</h2>
        <div className="transition-all duration-300 hover:bg-darkGrayishBlue/20 p-2 rounded-lg">
          <p>
            This tool is designed for Engineering Leaders to improve the effectiveness of their 1:1 meetings.
          </p>
          <p> It provides a selection of questions that can be used to guide conversations. </p>
          <p>The goal is to facilitate more meaningful and productive conversations.
          </p>
        </div>
      </div>
      
      <div className={`mb-8 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
        <h2 className="font-bold text-neonGreen transition-all duration-300 hover:scale-105 transform">Who Am I?</h2>
        <div className="transition-all duration-300 hover:bg-darkGrayishBlue/20 p-2 rounded-lg">
          <p>
            Hey there, I am <span className="text-neonGreen font-bold animate-pulse">Arjit</span>. I am constantly looking for ways to improve. </p>
            <p> I created this to help other leaders have effective conversations with their team members. </p>
            <p> I hope it brings value to your 1:1s!
          </p>
        </div>
      </div>

      <div className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
        <h2 className="font-bold text-neonGreen transition-all duration-300 hover:scale-105 transform">Contact</h2>
        <div className="transition-all duration-300 hover:bg-darkGrayishBlue/20 p-2 rounded-lg">
          <p>
            For support or to provide feedback, please email me at <a href="mailto:arjitsrivastava13@gmail.com" className="underline text-neonGreen hover:text-lightCyan transition-colors duration-300">arjitsrivastava13 at gmail.com</a>.
          </p>
        </div>
      </div>
      <br />
      <br />

      <div className={`flex justify-center mt-8 space-x-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
        <a href="https://github.com/arjitsrivastava" target="_blank" rel="noreferrer" className="transition-transform duration-300 hover:scale-125">
          <Image src="/github-icon.svg" alt="Github" width="24" height="24" />
        </a>
        <a href="https://linkedin.com/in/arjitsrivastava" target="_blank" rel="noreferrer" className="transition-transform duration-300 hover:scale-125">
          <Image src="/linkedin-icon.svg" alt="LinkedIn" width="24" height="24" />
        </a>
      </div>

      <Link 
        href="/"
        className={`text-lightCyan hover:text-neonGreen underline mt-8 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '500ms' }}
      >
        Back to Home
      </Link>

    </div>
  );
}
