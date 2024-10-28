"use client"

import React, { useEffect} from 'react'
import Navbar from './Navbar'
import Location from './Location'
import HeroHeanding from './HeroHeanding'
import Lenis from '@studio-freight/lenis'
import { VelocityScroll } from "./ui/scroll-based-velocity";

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
            <VelocityScroll
                text="Athervi Singh"
                default_velocity={5}
                className="font-display text-center text-6xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
            />
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
