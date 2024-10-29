import React from 'react'
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./ui/animated-grid-pattern";
import { NeonGradientCard } from "./ui/neon-gradient-card";
import BoxReveal from "./ui/box-reveal";

const ExperienceAndCerti = () => {
    return (
        <div className="relative flex h-[150vh] gap-5 w-full items-center overflow-hidden p-20 md:shadow-xl">
            <NeonGradientCard className="w-[40vw] h-[450px] mt-12 items-center justify-center text-center">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                    Experience
                </span>

                <BoxReveal boxColor={"#5046e6"} duration={0.9}>
                    <div className='flex items-center justify-center gap-2 mt-8'>
                        <img src="/images/CareerPhi.webp" alt="careerphi" className='w-12' />
                        <div className='text-white gap-5'>
                            <h1 className='text-left text-xl font-bold'>Full Stack Developer</h1>
                            <h1 className='opacity-70 italic'>careerphi🔹August 2024—Present</h1>
                        </div>

                    </div>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.9}>
                    <h1 className='text-white text-[12px] pl-14 mt-3 text-left'> —  Currently developing and debugging 5+ full-stack applications using the MERN stack</h1>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.9}>
                    <h1 className='text-white text-[12px] pl-14 mt-3 text-left'> —  Collaborating with a team of 4 members to design and implement MERN-based solutions, ensuring timely delivery of projects while maintaining clean, well-documented code and handling API endpoints to optimize data communication.</h1>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.9}>
                    <h1 className='text-white text-[12px] pl-14 mt-3 text-left'> — Committed to building a solid foundation in full-stack web development and software engineering practices, Enhancing teamwork and communication skills and collaborating with mentors</h1>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.9}>
                    <h1 className='text-white text-[12px] pl-14 mt-3 text-left'> <b className='text-[14px]'>Skills </b>  • JavaScript
                        • Tailwind
                        • BootStrap
                        • React.JS
                        • Redux
                        • API Handling
                        • MongoDB
                        • Node.JS
                        • Express.JS </h1>
                </BoxReveal >


            </NeonGradientCard>

            <div className=' flex flex-col gap-4 mt-12'>
                <NeonGradientCard className="w-[50vw] h-[215px] items-center justify-center text-center">
                    <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                        Education
                    </span>
                    <BoxReveal boxColor={"#5046e6"} duration={0.9}>

                        <div className='text-white flex gap-5 justify-center items-center '>
                            <img className='w-16' src="/images/AKTU.png" alt="AKTU" />
                            <div>
                                <h1 className='font-bold text-[16px] text-left'>Dr.A.P.J.Abdul Kalam Technical University,Lucknow</h1>
                                <h1 className='opacity-70 italic text-left'>
                                    Bechalore of Technology • August 2021 - August 2025
                                </h1>

                            </div>


                        </div>
                    </BoxReveal>
                    <BoxReveal boxColor={"#5046e6"} duration={0.9}>
                        <div className='text-white text-[12px] opacity-80  mt-3 text-left'>
                            I am currently pursuing my B.Tech in Computer Science and Engineering (2021-2025) from Dr. A.P.J. Abdul Kalam Technical University, Lucknow, with a strong foundation in programming and software development, aiming to leverage my skills in a dynamic IT role.
                        </div>
                    </BoxReveal>

                </NeonGradientCard>
                <NeonGradientCard className="w-[50vw] h-[215px] items-center justify-center text-center">
                    <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                        Certifications
                    </span>



                    <BoxReveal boxColor={"#5046e6"} duration={0.9}>

                        <div className='text-white gap-5 justify-center items-center mt-2 '>

                            <h1 className='font-bold text-lg text-left'> AWS APAC Solutions Architecture virtual experience program on Forage - September 2024 <a className='text-xs text-blue-600 underline ml-2' href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_ufqHw8S5fM9zwMK8t_1725825421531_completion_certificate.pdf">Credential</a></h1>
                        </div>
                    </BoxReveal>


                    <BoxReveal boxColor={"#5046e6"} duration={0.9}>

                        <div className='text-white gap-5 justify-center items-center mt-2 '>

                            <h1 className=' text-white text-[12px] opacity-80  mt-3 text-left'>
                                – Designed and simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times. <br />
                                – Described my proposed architecture in plain language ensuring my client understood how it works and how costs will be
                                calculated for it.</h1>
                        </div>
                    </BoxReveal>
                </NeonGradientCard>
            </div>

            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            />
        </div>
    )
}

export default ExperienceAndCerti
