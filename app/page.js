"use client";
import Hero from '@/components/Hero';
import Intro from "@/components/Intro";
import ProjectList from '@/components/ProjectList';
import { useEffect, useState } from 'react';
import Preloader from '../components/Preloader'
import { AnimatePresence } from 'framer-motion';

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
      <Hero />
      <Intro />
      <ProjectList/>
    </div>
  );
}
