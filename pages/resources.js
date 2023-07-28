import Head from 'next/head';
import ResourceCard from '../components/ResourceCard';
import Link from 'next/link';

const resources = [
  {
    title: 'Resource 1',
    description: 'Brief description of resource 1.',
    link: 'https://resource1.com',
    category: 'Category 1',
  },
  {
    title: 'Resource 1',
    description: 'Brief description of resource 1.',
    link: 'https://resource1.com',
    category: 'Category 1',
  },  
  {
    title: 'Resource 2',
    description: 'Brief description of resource 2.',
    link: 'https://resource2.com',
    category: 'Category 2',
  },
  {
    title: 'Resource 2',
    description: 'Brief description of resource 2.',
    link: 'https://resource2.com',
    category: 'Category 2',
  },  
  {
    title: 'Resource 3',
    description: 'Brief description of resource 2.',
    link: 'https://resource2.com',
    category: 'Category 3',
  },
  {
    title: 'Resource 3',
    description: 'Brief description of resource 2.',
    link: 'https://resource2.com',
    category: 'Category 3',
  },
];

export default function Resources() {
  const categories = [...new Set(resources.map(resource => resource.category))];

  return (
    <div className="font-sans bg-darkBlue h-screen flex flex-col justify-center items-center text-lightCyan px-4">
      <Head>
        <title>Resources for 1:1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-lightCyan text-lg text-center font-extrabold mb-4">Resources</h1>

      {categories.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-neonGreen text-xl font-bold mb-4">{category}</h2>
          <div className="flex flex-wrap justify-center">
            {resources
              .filter(resource => resource.category === category)
              .map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  link={resource.link}
                />
              ))}
          </div>
        </div>
      ))}

      <Link href="/">
        <a className="text-lightCyan underline mt-8">Back to Home</a>
      </Link>
    </div>
  );
}
