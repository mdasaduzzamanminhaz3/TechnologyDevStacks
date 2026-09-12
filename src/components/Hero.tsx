import HeroImg from "../assets/banner-stack.png";
const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-between px-4 py-20">
        <div className="flex flex-col w-1/2">
          <h1 className="text-4xl font-bold">
            Build Your Ideal <br /><span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">Development Stack </span>
          </h1>
          <span className="text-gray-700 mt-4 text-start"> 
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </span>

          <div className="flex gap-4 mt-8 text-start items-center">
          <button className="btn rounded-md text-white bg-gradient-to-r from-orange-500 to-pink-600">Explore Technologies</button>
          <button className="btn">Learn More</button>
          </div>
        </div>
        <div>
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;