import React, { useEffect, useState } from "react";
import Benefits from "./scenes/Benefits";
import ContactUs from "./scenes/ContactUs";
import Footer from "./scenes/Footer";
import HomePage from "./scenes/Home";
import Navbar from "./scenes/Navbar";
import OurClasses from "./scenes/ourClasses";
import { SelectedPage } from "./shared/types";

const App = () => {

  const [selectedPage, setSelectedPage]=useState<SelectedPage>(SelectedPage.Home);
  const [isTopofPage, setIsTopOfPage]=useState<boolean>(true);

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY===0)
      {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      else if(window.scrollY!==0)
      {
        setIsTopOfPage(false);
      }
    }

    window.addEventListener("scroll",handleScroll);
      return ()=>{window.removeEventListener("scroll",handleScroll)}
  },[])
  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopofPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <HomePage setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  );
};
export default App;
