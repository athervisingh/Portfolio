"use client"

import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './Navbar'
import Location from './Location'
import HeroHeanding from './HeroHeanding'
import BigName from './BigName'
// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            smooth: true,
            duration: 0.8,  // Decreased duration for faster scroll
            easing: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t, // Faster easing function
        })

        // Request Animation Frame for Lenis scroll updates
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Clean up Lenis on unmount
        return () => {
            lenis.destroy()
        }
    }, [])

    useEffect(() => {
        // GSAP Animation on Scroll using ScrollTrigger
        gsap.fromTo(
            '.hero-image',
            { opacity: 0, y: 100 },  // Initial state (hidden + below)
            {
                opacity: 1,
                y: 0,  // Final state (visible + in place)
                ease: 'power1.out',  // Smoother and faster easing for GSAP
                scrollTrigger: {
                    trigger: '.hero-image',
                    start: 'top 90%',  // Animation starts when the image is near the viewport bottom
                    end: 'top 20%',  // Animation ends as it moves higher into the viewport
                    scrub: true,  // Allows smooth scrolling control over the animation
                    markers: false,  // Set to true for debugging (shows scroll positions)
                },
            }
        )
    }, [])

    return (
        <div className="bg-[#999d9e]">
            <Navbar />
            <Location />
            <HeroHeanding />
            <BigName/>
            {/* Image container with GSAP animation */}
            <img
                src="/images/heroImage.png"
                alt="Hero Image"
                className=" hero-image w-[60vw] h-[110vh] mx-auto"
            />
        </div>
    )
}

export default Hero
