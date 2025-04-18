import Head from 'next/head';
import ResourceCard from '../components/ResourceCard';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const resources = [
  {
    title: 'Meeting with Purpose',
    description: 'Learn to enhance 1:1 meetings with examples.',
    link: 'https://www.leapsome.com/blog/meeting-with-purpose-the-unique-benefits-of-1-on-1-meetings',
    category: 'Purpose',
  },
  {
    title: 'The Update, The Vent, and The Disaster',
    description: 'Navigate updates, vents, disasters.',
    link: 'https://randsinrepose.com/archives/the-update-the-vent-and-the-disaster/',
    category: 'Purpose',
  },  
  {
    title: 'Topics for 1:1s With Your Manager',
    description: 'Discuss these topics in 1:1s with managers.',
    link: 'https://twitter.com/b0rk/status/1037186572234498048',
    category: 'What to discuss',
  },
  {
    title: 'One-On-One Meeting Checklist',
    description: 'The "ultimate" one-on-one meeting checklist.',
    link: 'https://www.15five.com/blog/one-on-one-meeting-checklist/',
    category: 'What to discuss'
  },  
  {
    title: 'How to Ask Better Questions',
    description: 'Enhance communication with this guide.',
    link: 'https://archive.ph/dOQpk',
    category: 'Additional Resources',
  },
  {
    title: 'Want to learn more about 1:1s?',
    description: 'Check the link with more of such resources.',
    link: 'https://github.com/arjitsrivastava/1-1-Generator/blob/main/resources/1on1Resources.MD',
    category: 'Additional Resources',
  },
];

export default function Resources() {
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
  
  const categories = [...new Set(resources.map(resource => resource.category))];

  return (
    <div className="font-sans bg-darkBlue min-h-screen flex flex-col justify-center items-center text-lightCyan px-4 py-8">
      <Head>
        <title>Resources for 1:1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={`text-lightCyan text-lg text-center font-extrabold mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        Resources
      </h1>
      
      <div className="auto-rows-auto w-full max-w-4xl">
        {categories.map((category, categoryIndex) => (
          <div 
            key={categoryIndex} 
            className={`mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
            style={{ transitionDelay: `${categoryIndex * 150}ms` }}
          >
            <h2 className="text-neonGreen text-xl font-bold mb-4 transition-all duration-300 hover:scale-105 transform origin-left">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
              {resources
                .filter(resource => resource.category === category)
                .map((resource, index) => (
                  <div 
                    key={index} 
                    className={`transition-all duration-500`}
                    style={{ transitionDelay: `${(categoryIndex * 150) + (index * 100)}ms` }}
                  >
                    <ResourceCard
                      title={resource.title}
                      description={resource.description}
                      link={resource.link}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <Link 
        href="/"
        className={`text-lightCyan hover:text-neonGreen underline mt-8 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: `${categories.length * 200}ms` }}
      >
        Back to Home
      </Link>
    </div>
  );
}
