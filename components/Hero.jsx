"use client"

import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Location from './Location'
import HeroHeanding from './HeroHeanding'
import BigName from './BigName'
import Lenis from '@studio-freight/lenis'

const Hero = () => {
    

    useEffect(() => {
      
        const lenis = new Lenis({
            duration: 1.2,
            smooth: true
        })

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

      

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <div className="bg-[#999d9e]">
            <Navbar />
            <Location />
            <HeroHeanding />
            {/* <BigName/> */}
            {/* Image container with GSAP animation */}
            <img
               
                src="/images/heroImage.png"
                alt="Hero Image"
                className="hero-image w-[60vw] h-[110vh] mx-auto"
            />
        </div>
    )
}

export default Hero
