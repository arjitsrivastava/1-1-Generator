import Head from 'next/head';
import MobileDivider from '../components/MobileDivider';
import DesktopDivider from '../components/DesktopDivider';
import DiceIcon from '../components/DiceIcon';
import { useState, useEffect, useMemo } from 'react';
import { useMedia } from 'react-use';
import questions from '../public/questions.json';
import Link from 'next/link';

// Moved to a separate function for testability and separation of concerns
function getRandomQuestion(category, subcategory) {
  let filteredQuestions = category === 'All' ? questions : questions.filter(q => q.category === category);
  filteredQuestions = subcategory === 'All' ? filteredQuestions : filteredQuestions.filter(q => q.subcategory === subcategory);
  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  return filteredQuestions[randomIndex];
}

// New component to avoid repetition
function Select({ options, value, onChange, label }) {
  return (
    <select 
      onChange={onChange}
      value={value}
      aria-label={label}
      className='bg-neonGreen rounded-md text-darkBlue w-3/4 text-center mb-4 font-extrabold text-[16px]'
    >
      {options.map((option) => 
        <option key={option} value={option}>{option}</option>
      )}
    </select>
  );
}

export default function Home() {
  const isWide = useMedia('(min-width: 768px)', true);
  const [category, setCategory] = useState('All');
  const [subcategory, setSubcategory] = useState('All');
  const [question, setQuestion] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Use this to ensure we only render on the client
  useEffect(() => {
    setIsClient(true);
    setQuestion(getRandomQuestion(category, subcategory));
  }, []);

  useEffect(() => {
    if (isClient) {
      const newQuestion = getRandomQuestion(category, subcategory);
      if (newQuestion) {
        setQuestion(newQuestion);
      }
    }
  }, [category, subcategory, isClient]);

  const categories = useMemo(() => ['All', ...new Set(questions.map(q => q.category))], []);
  const subcategories = useMemo(() => {
    return ['All', ...new Set(questions.filter(q => (category === 'All' || q.category === category) && q.subcategory).map(q => q.subcategory))];
  }, [category]);

  // Don't render question content until client-side
  if (!isClient || !question) {
    return (
      <div className='font-sans flex flex-col min-h-screen bg-darkBlue justify-center relative overflow-y-auto'>
        <Head>
          <title>1:1 Question Generator</title>
          <meta name='description' content='Created by Arjit' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className="flex-grow flex flex-col justify-center items-center">
          <main className="w-full px-3 md:px-0">
            <div className="bg-darkGrayishBlue rounded-lg flex flex-col items-center mx-auto md:max-w-lg space-y-4 p-6">
              <p className="text-lightCyan">Loading...</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className='font-sans flex flex-col min-h-screen bg-darkBlue justify-center relative overflow-y-auto'>
      <Head>
        <title>1:1 Question Generator</title>
        <meta name='description' content='Created by Arjit' />
        <link rel='icon' href='/favicon.ico' />
      </Head>


<nav className="mb-4 mt-8">
  <Link 
    href="/resources"
    className="mr-4 bg-neonGreen hover:bg-lightCyan text-darkBlue font-bold py-2 px-4 rounded"
  >
    Resources
  </Link>
  <Link 
    href="/about"
    className="bg-neonGreen hover:bg-lightCyan text-darkBlue font-bold py-2 px-4 rounded"
  >
    Contact
  </Link>
</nav>



      <div className="flex-grow flex flex-col justify-center items-center"> {/* Added items-center */}
        <main className="w-full px-3 md:px-0"> {/* Added padding control */}
          {/* Reduced gap, added overflow and max-height */}
          <div className={`bg-darkGrayishBlue rounded-lg flex flex-col items-center ${category === 'All' ? 'gap-y-2' : 'gap-y-4'} mx-auto md:max-w-lg space-y-4 p-6`}> {/* Added p-6 for internal padding */}
            <Select 
              options={categories} 
              value={category} 
              onChange={(e) => {
                setCategory(e.target.value);
                setSubcategory('All');
              }} 
              label="Category"
            />

            {category !== 'All' && (
              <Select 
                options={subcategories} 
                value={subcategory} 
                onChange={(e) => setSubcategory(e.target.value)} 
                label="Subcategory"
              />
            )}

            <div className="flex flex-col items-center"> {/* Removed space-y-4 */}
              <h1 className='text-neonGreen text-xs tracking-[0.3em] font-extrabold pt-10'>
                {`QUESTION #${question.id}`}
              </h1>
              {category === 'All' && (
                <div className='text-neonGreen text-xs tracking-[0.3em] font-extrabold mt-2'>
                  {`Category: ${question.category}`}
                </div>
              )}
              <div className='text-lightCyan text-[28px] text-center font-extrabold px-3 md:px-8 pb-4 mt-2'> {/* Added padding-bottom */}
                {`"${question.text}"`}
              </div>

              {question.source && (
                <div className='italic text-sm text-lightCyan'>
                  <a href={question.source} target="_blank" rel="noopener noreferrer">Source</a>
                </div>
              )}

              <div className='pb-2'>
                {isWide ? <DesktopDivider /> : <MobileDivider />}
              </div>
              <button
                onClick={() => setQuestion(getRandomQuestion(category, subcategory))}
                type='button'
                className='bg-neonGreen rounded-full p-4 hover:shadow-3xl'
              >
                <DiceIcon />
              </button>
            </div>
          </div>
        </main>
      </div>

      <footer className='text-center text-white bg-darkGrayishBlue p-4 fixed bottom-0 w-full'>
        Made with ❤️ by <a href="https://github.com/arjitsrivastava" target="_blank" rel="noreferrer"> Arjit</a>
      </footer>
    </div>
  );
}
