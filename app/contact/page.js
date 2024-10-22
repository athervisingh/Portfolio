"use client"
import React,{useEffect,useState} from 'react'
import Curve from '../../components/Layout/Curve'
import { AnimatePresence } from 'framer-motion';
const Contact = () => {
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
    return (<>
  <AnimatePresence mode='wait'>

     {isLoading && <Curve word={["CONTACT"]} />}


    </AnimatePresence>
    <div>
          CONTACT 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat amet earum maxime in voluptas sed voluptatum. Voluptatibus molestiae voluptatem molestias fugiat voluptas dolorum, consequuntur tenetur qui labore excepturi reiciendis dolore!
    </div>
  </>
  
  )
}

export default Contact
