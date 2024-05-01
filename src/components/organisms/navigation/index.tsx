import React, { useState, useEffect } from "react";
import NavBrand from "../../molecules/navigation/NavBrand";
import NavButton from "../../molecules/navigation/NavButton";
import NavList from "../../molecules/navigation/NavList";
import NavToggle from "../../molecules/navigation/NavToggle";
import TranslationForm from "../form/translationForm";
import AjiTerjem from "../form/translationForm";


const Navigation: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const [scrolled, setNavbar] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div className="top_section">
      <nav className={"p-2 mt-0 fixed w-full z-10 top-0 " + (scrolled ? "bg-navy-secondary" : "bg-gradient-to-b from-grey")}>
         <div className='container mx-auto flex flex-row flex-wrap xl:flex-nowrap items-center'>
             <NavBrand title='AtlasIA' isActive={isActive} />

             <NavToggle btnClick={() => setIsActive(!isActive)} />

             <NavList isActive={isActive} />

             <NavButton />
        </div>
      </nav>
      {/* <div className="bg-blend-darken illu" style={{position: "relative", width: "100%", fontSize: 0}}>
        <div style={{position: "absolute", top: 0, left: 0, height: "100%", width: "100%", backgroundColor: "rgba(1, 1, 1, 0.05)"}}></div>
        <section className="w-full h-screen bg-dragomaniabackground bg-cover bg-center"></section>
      </div> */}
      {/* The submission form */}
    </div>
  );
};

export default Navigation;
