"use client"
import React,{useEffect,useState} from 'react'
import Curve from '../../components/Layout/Curve'
import { AnimatePresence } from 'framer-motion';
const Work = () => {
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
    <>
   <AnimatePresence mode='wait'>

     {isLoading && <Curve word={["WORK"]} />}


    </AnimatePresence>
    
          WORK
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, doloribus sed adipisci voluptas iusto necessitatibus cupiditate aliquam, aut reprehenderit quia excepturi. Facere deserunt modi quas quasi, ipsum at consectetur? Veritatis.
  </>
     
  )
}

export default Work
