import { use, useState } from "react";
import StacksCard from "./StacksCard";
import type { TechnologyType } from "../../types/technologyType";
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TechnologyProps {
  technologiesPromise: Promise<TechnologyType[]>;
}

const TStacks = ({ technologiesPromise }: TechnologyProps) => {
  const technologies = use(technologiesPromise);

  const [selectedStacks, setSelectedStacks] = useState<TechnologyType[]>([]);

  const handleAddToStack = (technology: TechnologyType) => {
    setSelectedStacks((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemoveStack = (technology: TechnologyType) => {
    setSelectedStacks((prev) =>
      prev.filter((stack) => stack.id !== technology.id),
    );
  };
  const handleRemoveAllStacks = () => {
    setSelectedStacks([]);
    toast.warn(`All Stacks are deleted!`);
  };

  return (
    <section className="container mx-auto">
      <h3 className="mt-5 text-start text-3xl font-bold">
        Explore the{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
          Technologies
        </span>
      </h3>

      <p className="text-gray-700">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:w-3/4 lg:grid-cols-3">
          {technologies.map((technology) => (
            <StacksCard
              key={technology.id}
              technology={technology}
              handleAddToStack={handleAddToStack}
              isSelected={selectedStacks.includes(technology)}
            />
          ))}
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md sticky top-20">
          <h6 className="text-xl font-bold">Your Stack</h6>

          <p className="text-gray-700">
            {selectedStacks.length === 0
              ? "No Technology Selected Yet"
              : `${selectedStacks.length} Technology Selected`}
          </p>

          {selectedStacks.length === 0 ? (
            <div className="mt-4">
              <span className=" block rounded-md border border-dashed border-gray-300 px-6 py-3 text-center text-gray-700">
                Your Stack is empty
              </span>
            </div>
          ) : (
            <div>
              <div className="mt-4 flex flex-col gap-4">
                {selectedStacks.map((stack) => (
                  <div
                    key={stack.id}
                    className="flex items-center justify-between gap-4 rounded-md border border-gray-200 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        className="h-8 w-8"
                        src={stack.icon}
                        alt={stack.name}
                      />

                      <div>
                        <span className="font-medium">{stack.name}</span>

                        <p className="text-sm text-gray-500">
                          {stack.category}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveStack(stack)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <RxCross2 />
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={handleRemoveAllStacks}
                className="mt-4 w-full rounded-md border border-red-300 py-2 text-sm text-red-500 transition hover:bg-red-50 btn"
              >
                Remove All
              </button>
            </div>
          )}
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={2000} theme="light" />
    </section>
  );
};

export default TStacks;
