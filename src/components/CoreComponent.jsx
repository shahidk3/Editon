import React, {useState, useEffect} from 'react'
import Home from './Home'
import Servicesffered from './Servicesffered'
import Offerings from './Offerings'
import CompanyPolicy from './CompanyPolicy'
import Footer from './Footer'
import Lenis from 'lenis'
import ClientSection from './ClientSection'


const CoreComponent = () => {
    useEffect(() => {
      const lenis= new Lenis();
      function raf(time){
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

    }, [])
    
  return (
    <>
    <Home/>
    <Servicesffered/>
    <Offerings/>
    <CompanyPolicy/>
    <ClientSection/>
    <Footer/>
    
    
    
    
    
    </>
  )
}

export default CoreComponent