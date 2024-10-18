"use client";

import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';

const Intro = () => {
    const [hoveredLink, setHoveredLink] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const circleRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });

        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2, // scroll speed (higher value for slower scrolling)
            smooth: true,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        // Clean up Lenis instance on component unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    // GSAP shake effect when scrolling
    useEffect(() => {
        gsap.to(circleRef.current, {
            x: '+=10', // shake effect (horizontal movement)
            duration: 0.1,
            yoyo: true,
            repeat: -1, // keeps repeating
            ease: 'power1.inOut',
            paused: true,
            scrollTrigger: {
                trigger: circleRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                onEnter: () => gsap.getById("shake").play(), // trigger the shake on scroll
            },
        });
    }, []);

    const handleMouseMove = (e) => {
        const parentRect = e.currentTarget.getBoundingClientRect();
        const circleSize = 144;

        const x = e.clientX - parentRect.left - circleSize / 2;
        const y = e.clientY - parentRect.top - circleSize / 2;

        const constrainedX = Math.max(0, Math.min(x, parentRect.width - circleSize));
        const constrainedY = Math.max(0, Math.min(y, parentRect.height - circleSize));

        setPosition({ x: constrainedX, y: constrainedY });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setHoveredLink({ x: 0, y: 0 });
        setPosition({ x: 0, y: 0 });
    };

    const textHover = (e) => {
        const circleRect = e.currentTarget.getBoundingClientRect();
        const circleCenter = {
            x: circleRect.left + circleRect.width / 2,
            y: circleRect.top + circleRect.height / 2,
        };

        const offsetX = e.clientX - circleCenter.x;
        const offsetY = e.clientY - circleCenter.y;

        const limitedX = offsetX * 0.4;
        const limitedY = offsetY * 0.4;

        setHoveredLink({ x: limitedX, y: limitedY });
    };

    const textVariants = {
        default: { x: 0, y: 0 },
        hover: (hoveredLink) => ({
            x: hoveredLink ? hoveredLink.x : 0,
            y: hoveredLink ? hoveredLink.y : 0,
        }),
    };

    const fillVariants = {
        hidden: { scaleY: 0, originY: 1 },
        visible: { scaleY: 1, originY: 1 },
        exit: { scaleY: 1, originY: 1 },
    };

    return (
        <div className='w-[100vw]'>
            <div className='flex m-7 gap-10 justify-around'>
                <div data-aos="fade-right" className='w-[40vw] p-10 text-2xl'>
                    As a passionate MERN developer, I’m focused on building sleek and efficient applications. I’m eager to bring fresh ideas to the digital world and collaborate to create impactful solutions—clear, simple, and effective.
                </div>

                <div className='w-[40vw] p-10'>
                    <div data-aos="fade-left" className='w-[30vw] italic'>
                        My passion for design, code, and interaction drives me to create meaningful web experiences, positioning me to bring fresh perspectives to the world of web development.
                    </div>
                    <div className='flex justify-center' data-aos="flip-left">
                        <div
                            className="flex items-center mt-10 w-44 h-44 justify-center relative"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="w-full h-full relative">
                                <Link href='/'
                                    className="w-36 h-36 rounded-full overflow-hidden text-white flex items-center justify-center absolute bg-black"
                                    onMouseMove={(e) => textHover(e)}
                                    onMouseLeave={handleMouseLeave}
                                    style={{
                                        transform: `translate(${position.x}px, ${position.y}px)`,
                                        transition: 'transform 0.3s ease-out, background-color 0.3s ease-in-out',
                                    }}
                                    ref={circleRef}
                                    
                                >
                                    <motion.div
                                        className="absolute w-full h-full rounded-full bg-gradient-to-t from-blue-500 via-blue-600 to-blue-700"
                                        variants={fillVariants}
                                        initial="hidden"
                                        animate={isHovered ? "visible" : "hidden"}
                                        exit="exit"
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    />
                                    <motion.span
                                        className='inline-block'
                                        custom={hoveredLink}
                                        variants={textVariants}
                                        animate={hoveredLink ? 'hover' : 'default'}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    >
                                        About me
                                    </motion.span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
