"use client"
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import Lenis from '@studio-freight/lenis'
import SlidingImage from '../components/SlidingImage'
import { useScroll, useTransform } from 'framer-motion';


const ProjectList = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [index, setIndex] = useState(-1)
  const [isImageHover, setIsImageHover] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const circleRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });

  const projects = [
    "Semantic Segmentation of Satellite Imagery",
    "AthCare : Animal Donation Platform",
    "PassOP : Secure Password Manager",
    "WeatherWise : Weather Forecast Web Application",
    "To-Do List",
    "MusicWave : Music Streaming Application"
  ];

  const projectsLink = [
    "/images/Semantic Segmentation of Satellite Imagery.png",
    "/images/AthCare : Animal Donation Platform.png",
    "/images/PassOP : Secure Password Manager.png",
    "/images/WeatherWise : Weather Forecast Web Application.png",
    "/images/To-Do List.png",
    "/images/MusicWave : Music Streaming Application.png"
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animateCircle = () => {
      if (circleRef.current) {
        const lerp = (start, end, factor) => start + (end - start) * factor;
        const lerpFactor = 0.15;

        setPosition(prevPosition => ({
          x: lerp(prevPosition.x, targetPosition.current.x, lerpFactor),
          y: lerp(prevPosition.y, targetPosition.current.y, lerpFactor)
        }));
      }
      animationFrameId = requestAnimationFrame(animateCircle);
    };

    animateCircle();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setIndex(index);
  };

  const handleMouseMove = (e) => {
    const parentRect = e.currentTarget.getBoundingClientRect();
    const circleSize = 96;

    const x = e.clientX - parentRect.left;
    const y = e.clientY - parentRect.top;

    const constrainedX = Math.max(circleSize / 2, Math.min(x, parentRect.width - circleSize / 2));
    const constrainedY = Math.max(circleSize / 2, Math.min(y, parentRect.height - circleSize / 2));

    targetPosition.current = { x: constrainedX, y: constrainedY };

    if (circleRef.current) {
      const circleRect = circleRef.current.getBoundingClientRect();
      const circleX = circleRect.left + circleRect.width / 2 - parentRect.left;
      const circleY = circleRect.top + circleRect.height / 2 - parentRect.top;

      const dx = x - circleX;
      const dy = y - circleY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = circleSize / 4;

      if (distance <= maxDistance) {
        setTextPosition({ x: dx, y: dy });
      } else {
        const angle = Math.atan2(dy, dx);
        setTextPosition({
          x: Math.cos(angle) * maxDistance,
          y: Math.sin(angle) * maxDistance
        });
      }
    }
  };

  const handleImageMouseEnter = () => {
    setIsImageHover(true);
  };

  const handleImageMouseLeave = () => {
    setIsImageHover(false);
    setTextPosition({ x: 0, y: 0 });
  };

  const imageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      y: [0, -15, 0],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      }
    }
  };

  return (
    <div className='mb-10'>   
      <h1 className='text-2xl text-center mb-20'>WORK</h1>
      <div className='flex justify-between gap-5'>
        <div data-aos="zoom-out-down" className='pl-10 w-[30vw]'>
          {projects.map((project, i) => (
            <div
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              className='p-4 text-sm hover:border-b-gray-400 hover:rounded-2xl hover:shadow-xl mt-6 cursor-pointer'
            >
              <span>{project}</span>
            </div>
          ))}
        </div>

        <div
          className='w-[60vw] items-center h-[428px] flex justify-center mt-10 mr-10 relative'
          onMouseMove={handleMouseMove}
          onMouseLeave={handleImageMouseLeave}

        >
          
          {!isHovered && (<>
            
            <SlidingImage />
          </>
           
      

        )}

          <AnimatePresence mode="wait">
            {isHovered && index !== -1 && (
              <motion.img
                key={index}
                onMouseEnter={handleImageMouseEnter}
                className='rounded-md shadow-lg cursor-pointer mx-20 '
                src={projectsLink[index]}
                alt={projects[index]}
                variants={imageVariants}
                initial="initial"
                animate={isImageHover ? ["animate", "hover"] : "animate"}
                exit="exit"
              />
            )}
          </AnimatePresence>

          {isImageHover && (
            <Link
              href={`http://localhost:3000/work/${projects[index]}`}
              ref={circleRef}
              className='rounded-full w-24 flex justify-center items-center cursor-pointer h-24 bg-gradient-to-t from-blue-500 via-blue-600 to-blue-700 shadow-xl absolute'
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.span
                className='text-white font-bold'
                animate={{ x: textPosition.x, y: textPosition.y }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                View
              </motion.span>
            </Link>
          )}
        </div>
      </div>
      <motion.div style={{ height }} className="relative mt-40">
        <div className="absolute h-[750%] w-[100%] rounded-b-[100%] bg-white z-10 shadow-[0_60px_50px_rgba(0,0,0,0.75)]"></div>
      </motion.div>
    </div>
  )
}

export default ProjectList;