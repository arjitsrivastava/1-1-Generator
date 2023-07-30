import Head from 'next/head';
import ResourceCard from '../components/ResourceCard';
import Link from 'next/link';

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
    link: 'https://hbr.org/2009/05/real-leaders-ask.html',
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
