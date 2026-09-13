import type { TechnologyType } from "../../types/technologyType";

const StacksCard = ({
  icon,
  name,
  description,
  category,
  rating,
  badge,
}:TechnologyType) => {

const badgeStyles = {
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
    <div className="w-full rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md transition">

      <div className="flex items-start justify-between">
        <div className="text-xl">
          <img src={icon} className="h-8 w-8" alt={name} />
        </div>

<span
  className={`rounded-full px-2 py-1 text-[9px] ${
    badgeStyles[badge] || "bg-gray-100 text-gray-600"
  }`}
>
  {badge}
</span>
      </div>

      <h3 className="mt-3 text-sm font-bold text-gray-900">
        {name}
      </h3>


      <p className="mt-2 h-10 overflow-hidden text-[9px] leading-4 text-gray-500">
        {description}
      </p>

      <div className="mt-3 flex items-center justify-between text-[8px] text-gray-500">
        <span className="rounded bg-gray-100 px-2 py-1">
          {category}
        </span>
        <span className="text-yellow-500">
          ★ {rating}
        </span>
      </div>
      <button className=" btn mt-3 w-full rounded-md bg-gray-950 py-2 text-[9px] text-white hover:bg-gray-800 transition">
        Add to Stack
      </button>
    </div>
  );
};

export default StacksCard;