import type { TechnologyType } from "../../types/technologyType";

interface StacksCardProps {
  technology: TechnologyType;
  handleAddToStack: (technology: TechnologyType) => void;
  isSelected: boolean;
}

const StacksCard = ({
  technology,
  handleAddToStack,
  isSelected,
}: StacksCardProps) => {
  const badgeStyles: Record<string, string> = {
    Popular: "bg-blue-50 text-blue-500",
    "Top SQL": "bg-purple-50 text-purple-500",
    Fast: "bg-green-50 text-green-500",
    Enterprise: "bg-orange-50 text-orange-500",
    Versatile: "bg-cyan-50 text-cyan-500",
    Cache: "bg-red-50 text-red-500",
    NoSQL: "bg-yellow-50 text-yellow-600",
    Essential: "bg-indigo-50 text-indigo-500",
    Containers: "bg-sky-50 text-sky-500",
    Scalable: "bg-pink-50 text-pink-500",
    Standard: "bg-gray-100 text-gray-600",
    Reliable: "bg-emerald-50 text-emerald-600",
    Lightweight: "bg-teal-50 text-teal-500",
    Robust: "bg-violet-50 text-violet-500",
    Ubiquitous: "bg-blue-50 text-blue-600",
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <img src={technology.icon} className="h-8 w-8" alt={technology.name} />

        <span
          className={`rounded-full px-2 py-1 text-sm ${
            badgeStyles[technology.badge] || "bg-gray-100 text-gray-600"
          }`}
        >
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-3 text-sm font-bold text-gray-900">{technology.name}</h3>

      <p className="mt-2 h-10 overflow-hidden text-sm  text-gray-500">
        {technology.description}
      </p>

      <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
        <span className="rounded bg-gray-100 px-2 py-1">{technology.category}</span>
        <span className="text-yellow-500">★ {technology.rating}</span>
      </div>
      <button
        onClick={() => handleAddToStack(technology)}
        disabled={isSelected}
        className={`mt-3 w-full rounded-md py-2 text-sm text-white transition ${
          isSelected
            ? "cursor-not-allowed bg-gray-400"
            : "btn bg-gray-950 hover:bg-gray-800"
        }`}
      >
        {isSelected ? "Already Selected" : "Add to Stack"}
      </button>
    </div>
  );
};

export default StacksCard;
