export default function ResourceCard({ title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="bg-darkGrayishBlue hover:bg-darkGrayishBlue/60 rounded-lg p-4">
        <h2 className="font-bold text-neonGreen mb-2">{title}</h2>
        <p className="mb-2">{description}</p>
      </div>
    </a>
  );
}
