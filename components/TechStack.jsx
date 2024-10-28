"use client";

import { useEffect, useState } from "react";
import { motion} from 'framer-motion'
import React from 'react'
import IconCloud from './ui/icon-cloud'
import Particles from './ui/particles';
import { useTheme } from "next-themes";
import HyperText from "./ui/hyper-text";
import ShineBorder from "./ui/shine-border";
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
const TechStack = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#000000");
  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#ffffff");
  }, [theme]);


  
  const slugs = [
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "postgresql", 
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "mongodb",
    'mongoose',
    'tailwindcss',
    'bootstrap',
    'windows',
    'linux',
    'redux'
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])
  return (
    <div className='bg-white'>
      <div className="relative w-[100vw] h-[100vh] bg-[#112240] flex flex-col items-center justify-center overflow-hidden">
        <HyperText
          className="text-6xl font-bold text-white mt-16  dark:text-white"
          text="Tech Stack"
        />
        <div className="flex w-[100vw] h-[80vh]">
          <IconCloud iconSlugs={slugs} className='ml-10' />
          <div className="ml-10 mt-10">
            <ShineBorder
              className="relative w-[55vw] bg-[#112240] flex  flex-col p-4 overflow-hidden rounded-lg border md:shadow-xl"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <h1 className="text-white text-xl mb-5 font-bold">FRONTEND</h1>
              <div className="flex justify-center items-center flex-wrap  px-5 gap-3">
                {['html5', 'css3', 'javascript', 'react', 'nextdotjs', 'tailwindcss', 'bootstrap', 'redux'].map((icons, index) => (
                  <div key={index} className="flex justify-center border p-2 items-center gap-3 rounded-xl border-green-400 shadow-sm shadow-green-400">
                    <img src={`/images/${icons}.png`} className="w-7 rounded-md" alt={`${icons} icon`} />
                    <h1 className="text-white font-bold">{icons}</h1>
                  </div>
                ))}


                
              </div>
            </ShineBorder>

            <ShineBorder
              className="relative bg-[#112240] flex w-[55vw] flex-col p-4 overflow-hidden rounded-lg border md:shadow-xl"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <h1 className="text-white text-xl mb-5 font-bold">BACKEND</h1>
              <div className="flex justify-center items-center pb-7  px-1 gap-2">
                {['nodedotjs', 'express', 'postgresql', 'mongodb', 'mongoose'].map((icons, index) => (
                  <div key={index} className="flex justify-center border p-2 items-center gap-3 rounded-xl border-green-400 shadow-sm shadow-green-400">
                    <img src={`/images/${icons}.png`} className="w-7 rounded-md" alt={`${icons} icon`} />
                    <h1 className="text-white font-bold">{icons}</h1>
                  </div>
                ))}



              </div>
            </ShineBorder>
            <div className="flex w-[55vw] ">
              <ShineBorder
                className="relative bg-[#112240] flex  w-[15vw]  flex-col  overflow-hidden rounded-lg border md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <h1 className="text-white text-xl mb-5 font-bold">LANGUAGES</h1>
                <div className="flex gap-2">
                  {['java', 'javascript'].map((icons, index) => (
                    <div key={index} className="flex justify-center border p-3 items-center gap-2 rounded-xl border-green-400 shadow-sm shadow-green-400">
                      <img src={`/images/${icons}.png`} className="w-5 rounded-md" alt={`${icons} icon`} />
                      <h1 className="text-white font-bold">{icons}</h1>
                    </div>
                  ))}



                </div>
              </ShineBorder>
              <ShineBorder
                className="relative bg-[#112240] flex w-[35vw]  flex-col p-2 overflow-hidden rounded-lg border md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <h1 className="text-white text-xl mb-5 font-bold">TOOLS</h1>
                <div className="flex justify-center items-center flex-wrap px-3 gap-3">
                  {['git', 'github', 'figma', 'windows', 'linux'].map((icons, index) => (
                    <div key={index} className="flex justify-center border p-2 items-center gap-3 rounded-xl border-green-400 shadow-sm shadow-green-400">
                      <img src={`/images/${icons}.png`} className="w-7 rounded-md" alt={`${icons} icon`} />
                      <h1 className="text-white font-bold">{icons}</h1>
                    </div>
                  ))}



                </div>
              </ShineBorder>
            </div>
          


</div>

</div>
       
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </div>
      <motion.div style={{ height }} className="relative">
        <div className="absolute h-[750%] w-[100%] rounded-b-[100%] bg-[#11213f] z-10 shadow-[0_60px_50px_rgba(0,0,0,0.75)]"></div>
      </motion.div>
    </div>
  )
}

export default TechStack
