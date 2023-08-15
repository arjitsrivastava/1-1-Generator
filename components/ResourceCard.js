export default function ResourceCard({ title, description, link }) {
  return (
    <div className="bg-darkGrayishBlue rounded-lg p-4">
      <h2 className="font-bold text-neonGreen mb-2">{title}</h2>
      <p className="mb-2">{description}</p>
      <a href={link} target="_blank" rel="noreferrer" className="underline text-neonGreen">Access here.</a>
    </div>
  );
}
