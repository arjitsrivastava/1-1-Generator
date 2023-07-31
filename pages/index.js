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
      className='bg-neonGreen rounded-md text-darkBlue w-1/2 text-center mb-4 font-extrabold text-[16px]'
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
  const [question, setQuestion] = useState(getRandomQuestion(category, subcategory));

  useEffect(() => {
    const newQuestion = getRandomQuestion(category, subcategory);
    if (newQuestion) {
      setQuestion(newQuestion);
    } else {
      // Handle error case here
    }
  }, [category, subcategory]);

  const categories = useMemo(() => ['All', ...new Set(questions.map(q => q.category))], [questions]);
  const subcategories = useMemo(() => {
    return ['All', ...new Set(questions.filter(q => (category === 'All' || q.category === category) && q.subcategory).map(q => q.subcategory))];
  }, [questions, category]);

  return (
    <div className='font-sans flex flex-col min-h-screen bg-darkBlue justify-center relative'>
      <Head>
        <title>1:1 Question Generator</title>
        <meta name='description' content='Created by Arjit' />
        <link rel='icon' href='/favicon.ico' />
      </Head>


<nav className="mb-4 mt-8">
  <Link href="/resources">
    <a className="mr-4 bg-neonGreen hover:bg-lightCyan text-darkBlue font-bold py-2 px-4 rounded">
      Resources
    </a>
  </Link>
  <Link href="/about">
    <a className="bg-neonGreen hover:bg-lightCyan text-darkBlue font-bold py-2 px-4 rounded">
      Contact
    </a>
  </Link>
</nav>



      <div className="flex-grow flex flex-col justify-center">
        <main>
          <div className='bg-darkGrayishBlue rounded-lg flex flex-col items-center gap-y-6 mx-3 md:max-w-lg md:mx-auto space-y-4'>
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

            <div className="flex flex-col items-center space-y-4">
              <h1 className='text-neonGreen text-xs tracking-[0.3em] font-extrabold pt-10'>
                {`QUESTION #${question.id}`}
              </h1>
              <div className='text-lightCyan text-[28px] text-center font-extrabold px-3 md:px-8'>
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
