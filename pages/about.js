import Head from 'next/head';

export default function About() {
  return (
    <div className="font-sans bg-darkBlue h-screen flex flex-col justify-center items-center text-lightCyan px-4">
      <Head>
        <title>Say hello!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-lightCyan text-lg text-center font-extrabold mb-4">Wie geht's?</h1>

      <div className="mb-8 text-center">
        <h2 className="font-bold text-neonGreen">About</h2>
        <p>
          This tool is designed for Engineering Leaders to improve the effectiveness of their 1:1 meetings.
        </p>
        <p> It provides a selection of questions that can be used to guide conversations. </p>
        <p>The goal is to facilitate more meaningful and productive conversations.
        </p>
      </div>
      
      <div className="mb-8 text-center">
        <h2 className="font-bold text-neonGreen">Who Am I?</h2>
        <p>
          Hey there, I'm <span className="text-neonGreen font-bold">Arjit</span>. I am constantly looking for ways to improve. </p>
          <p> I created this to help other leaders have effective conversations with their team members. </p>
          <p> I hope it brings value to your 1:1s!
        </p>
      </div>

      <div className="text-center">
        <h2 className="font-bold text-neonGreen">Contact</h2>
        <p>
          For support or to provide feedback, please email me at <a href="mailto:arjitsrivastava13@gmail.com" className="underline text-neonGreen">arjitsrivastava13 at gmail.com</a>.
        </p>
      </div>
      <br />
      <br />

        <div className="flex justify-center mt-8 space-x-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <img src="/github-icon.svg" alt="Github" width="24" height="24" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <img src="/linkedin-icon.svg" alt="LinkedIn" width="24" height="24" />
        </a>
      </div>


    </div>
  );
}
