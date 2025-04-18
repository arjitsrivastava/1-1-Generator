export default function ResourceCard({ title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="block">
      <div className="bg-darkGrayishBlue rounded-lg p-4 transition-all duration-300 transform hover:scale-105 hover:bg-darkGrayishBlue/80 hover:shadow-lg">
        <h2 className="font-bold text-neonGreen mb-2 transition-colors duration-300 group-hover:text-lightCyan">{title}</h2>
        <p className="mb-2 transition-opacity duration-300">{description}</p>
      </div>
    </a>
  );
}
