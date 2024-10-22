
"use client"
import React,{useEffect,useState} from 'react'
import Curve from '../../components/Layout/Curve'
import { AnimatePresence } from 'framer-motion';
const About = () => {
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

     {isLoading && <Curve word={["ABOUT"]} />}


    </AnimatePresence>
    <div>
          ABout
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum eius possimus rerum modi corporis soluta consequatur dolorum id iusto? Repellendus voluptate aut illum fuga distinctio similique delectus quo aliquam tenetur.
    </div>
  
  </>
   
  )
}

export default About
