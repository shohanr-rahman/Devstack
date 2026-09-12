export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <article className="technology-card">
      <div className="card-top">
        <div className="technology-icon">
          <img src={technology.icon} alt={technology.name} />
        </div>

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="card-meta">
        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>
      </div>

      <div className="card-bottom">
        <div className="rating">
          <span className="star">★</span>
          <strong>{technology.rating}</strong>
        </div>

        <button
          className={`add-stack-btn ${isAdded ? "added" : ""}`}
          disabled={isAdded}
          onClick={() => onAdd(technology)}
        >
          {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
        </button>
      </div>
    </article>
  );
};

export default TechnologyCard;