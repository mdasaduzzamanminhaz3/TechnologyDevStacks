import { Suspense } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TStacks from "./components/tStacks/TStacks";
import type { TechnologyType } from "./types/technologyType";


function App() {

  const technologiesFetch = async ():Promise<TechnologyType[]> => {
    const response = await fetch('/data.json');
    const data = await response.json();
    return data;
  }

  const technologiesPromise = technologiesFetch();
  return (
    <>
    <NavBar/>
    <Hero/>
    <Suspense fallback={<div>Loading...</div>}>

    <TStacks technologiesPromise ={technologiesPromise}/>
    </Suspense>
    <Footer/>
    </>
  )
}

export default App
