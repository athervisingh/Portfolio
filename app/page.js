"use client";
import Hero from '@/components/Hero';
import ProjectList from '@/components/ProjectList';
import { useEffect, useState } from 'react';
import Preloader from '../components/Preloader'
import { AnimatePresence } from 'framer-motion';
import TechStack from '@/components/TechStack';
import ExperienceAndCerti from '@/components/ExperienceAndCerti';
import Header from '../components/header'
import Description from '../components/Description'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
          (

        async () => {

            setTimeout( () => {

              setIsLoading(false);

              document.body.style.cursor = 'default'

              window.scrollTo(0,0);

            }, 2000)

        }

      )()   
  }, [])
  
  
  return (
    <div className="scroll-smooth">
     <AnimatePresence mode='wait'>

      {isLoading && <Preloader />}

      </AnimatePresence>
     <Header />
      <Hero />
      <Description />
      <ProjectList />
      <TechStack />
      <ExperienceAndCerti/>
      
    </div>
  );
}
