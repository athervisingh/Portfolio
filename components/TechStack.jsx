import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from "next-themes";
import IconCloud from './ui/icon-cloud';
import Particles from './ui/particles';
import HyperText from "./ui/hyper-text";
import ShineBorder from "./ui/shine-border";

const TechStack = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#000000");
  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#ffffff");
  }, [theme]);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  // Animation variants for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Animation variants for tech icons
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

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

  const renderTechIcons = (icons) => {
    return icons.map((icon, index) => (
      <motion.div
        key={index}
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: false }}
        className="flex justify-center cursor-pointer border p-2 items-center gap-3 rounded-xl border-green-400 shadow-sm shadow-green-400 hover:border-purple-400 hover:shadow-purple-400 transition-colors duration-300"
      >
        <img src={`/images/${icon}.png`} className="w-7 rounded-md" alt={`${icon} icon`} />
        <h1 className="text-white font-bold">{icon}</h1>
      </motion.div>
    ));
  };

  return (
    <div className='bg-white'>
      <div className="relative w-[100vw] h-[120vh] bg-[#112240] flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <HyperText
            className="text-6xl font-bold text-white mt-16 dark:text-white"
            text="Tech Stack"
          />
        </motion.div>

        <div className="flex w-[100vw] h-[80vh]">
          <IconCloud iconSlugs={slugs} className='ml-10' />
          <motion.div
            className="ml-10 mt-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={cardVariants}>
              <ShineBorder
                className="relative w-[55vw] bg-[#112240] flex flex-col p-4 overflow-hidden rounded-lg border md:shadow-xl hover:shadow-2xl transition-shadow duration-300"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <h1 className="text-white text-xl mb-5 font-bold">FRONTEND</h1>
                <div className="flex justify-center items-center flex-wrap px-5 gap-3">
                  {renderTechIcons(['html5', 'css3', 'javascript', 'react', 'nextdotjs', 'tailwindcss', 'bootstrap', 'redux'])}
                </div>
              </ShineBorder>
            </motion.div>

            <motion.div variants={cardVariants}>
              <ShineBorder
                className="relative bg-[#112240] flex w-[55vw] flex-col p-4 overflow-hidden rounded-lg border md:shadow-xl hover:shadow-2xl transition-shadow duration-300"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <h1 className="text-white text-xl mb-5 font-bold">BACKEND</h1>
                <div className="flex justify-center items-center pb-7 px-1 gap-2">
                  {renderTechIcons(['nodedotjs', 'express', 'postgresql', 'mongodb', 'mongoose'])}
                </div>
              </ShineBorder>
            </motion.div>

            <div className="flex w-[50vw]">
              <motion.div variants={cardVariants} className="">
                <ShineBorder
                  className="relative bg-[#112240] flex w-[15vw] h-[173px] flex-col overflow-hidden rounded-lg border md:shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <h1 className="text-white text-xl mb-5 font-bold">LANGUAGES</h1>
                  <div className="flex gap-2">
                    {renderTechIcons(['java', 'javascript'])}
                  </div>
                </ShineBorder>
              </motion.div>

              <motion.div variants={cardVariants}>
                <ShineBorder
                  className="relative bg-[#112240] flex w-[31.5vw] flex-col p-2 overflow-hidden rounded-lg border md:shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <h1 className="text-white text-xl mb-5 font-bold">TOOLS</h1>
                  <div className="flex justify-center items-center flex-wrap px-3 gap-3">
                    {renderTechIcons(['git', 'github', 'figma', 'windows', 'linux'])}
                  </div>
                </ShineBorder>
              </motion.div>
            </div>
          </motion.div>
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
        <div className="absolute h-[750%] z-[1000] w-[100%] rounded-b-[100%] bg-[#11213f] shadow-[0_60px_50px_rgba(0,0,0,0.75)]"></div>
      </motion.div>
    </div>
  );
};

export default TechStack;