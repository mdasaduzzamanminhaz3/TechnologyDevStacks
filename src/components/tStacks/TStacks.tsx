import { use } from "react";
import StacksCard from "./StacksCard";
import type { TechnologyType } from "../../types/technologyType";
import { RxCross2 } from "react-icons/rx";
interface TechnologyProps {
    technologiesPromise:Promise<TechnologyType[]>;
}
const TStacks = ({technologiesPromise}:TechnologyProps) => {
   const technologies = use(technologiesPromise);
   console.log(technologies);
    return (
    <section className="container mx-auto">
      <h3 className="text-3xl font-bold text-start mt-10">
        Explore the <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Technologies</span>
      </h3>
      <p className="text-gray-700">Pick one technology per category to build your ideal stack.</p>
      <div className="flex items-start justify-between mt-8">
            <div className="w-3/4 grid grid-cols-3 gap-4 ">
                 {
                    technologies.map((technology) => (
                        <StacksCard 
                            key={technology.id}
                            icon={technology.icon}
                            name={technology.name}
                            description={technology.description}
                            category={technology.category}
                            rating={technology.rating}
                            badge={technology.badge}
                        />
                    ))
                 }
               
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md transition">
                <h6 className="text-xl font-bold">Your Stack</h6>
                <p className="text-gray-700">No technologies selected yet.</p>
                <p className="text-gray-700">2 Technology Selected</p>

                <div className="mt-4 flex flex-col gap-4">
                    <span className="text-gray-700 px-6 py-3 rounded-md border border-gray-300 border-dashed text-center">Your Stacks is empty</span>
                    <div className="flex items-center gap-4 border border-gray-200 rounded-md p-3">
                        <div className=" items-center gap-4">
                        <img className="h-5 w-5 border" src="{}" alt="tlogo" />
                        <span>Name</span>
                        <p>Category</p>
                        </div>
                        <div>
                            <RxCross2 />
                        </div>
                    </div>

                </div>
            </div>
      </div>
    </section>
  );
};

export default TStacks;