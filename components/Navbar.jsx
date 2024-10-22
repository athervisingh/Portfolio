"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredLink, setHoveredLink] = useState(null); // Track which link is hovered

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    const textHover = (index, e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setHoveredLink({ index, x, y });
    };

    const textLeave = () => {
        setHoveredLink(null);
    };

    const textVariants = {
        default: { x: 0, y: 0 },
        hover: (hoveredLink) => ({
            x: hoveredLink ? hoveredLink.x * 0.20 : 0,
            y: hoveredLink ? hoveredLink.y * 0.20 : 0,
        }),
    };



    return (
        <div className='p-5 w-[100vw] absolute z-50 text-white flex justify-between'>
            <div className='h-10 w-56 group' >
                <div className='cursor-pointer transition-transform duration-500 hover:translate-y-[28%] hover:translate-x-[2%] flex gap-1 px-5 h-full items-center'>
                    <div>&copy;</div>
                    <div className='flex gap-1 overflow-hidden relative w-[130px]'>
                        <div className='flex transition-transform duration-500 group-hover:translate-x-[-38%]'>
                            <span className='whitespace-nowrap'>Code&nbsp;by&nbsp;</span>
                            <span className='whitespace-nowrap'>Athervi&nbsp;</span>
                            <span className='whitespace-nowrap'>Singh</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex w-60 items-center'>
                {['work', 'about', 'contact'].map((label, index) => (
                    <div
                        key={index}
                        className='w-40 h-full items-center flex justify-center relative'
                        onMouseMove={(e) => textHover(index, e)}
                        onMouseLeave={textLeave}
                    >
                        <Link href={`/${label}`}>
                            <motion.span
                                className="inline-block"
                                custom={hoveredLink && hoveredLink.index === index ? hoveredLink : null}
                                variants={textVariants}
                                animate={hoveredLink && hoveredLink.index === index ? 'hover' : 'default'}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            >
                                {label}
                                <motion.div
                                    className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-white"
                                    initial={{ scaleX: 0 }}
                                    animate={hoveredLink && hoveredLink.index === index ? { scaleX: 1 } : { scaleX: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    style={{ transformOrigin: 'left' }}
                                />
                            </motion.span>


                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
