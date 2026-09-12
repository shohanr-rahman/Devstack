import type { Technology } from "./TechnologyCard";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="your-stack">
      <div className="stack-header">
        <div>
          <h2>Your Stack</h2>
          <p>
            {stack.length} Technology
            {stack.length !== 1 ? "ies" : "y"} Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            className="remove-all-btn"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>
          <h3>Your stack is empty</h3>
          <p>
            Add technologies from the list to build your
            perfect development stack.
          </p>
        </div>
      ) : (
        <div className="stack-items">
          {stack.map((technology) => (
            <div className="stack-item" key={technology.id}>
              <img
                src={technology.icon}
                alt={technology.name}
              />

              <div className="stack-item-info">
                <h4>{technology.name}</h4>
                <span>{technology.category}</span>
              </div>

              <button
                className="remove-item-btn"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default YourStack;