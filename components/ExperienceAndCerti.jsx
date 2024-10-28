import React from 'react'
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./ui/animated-grid-pattern";

const ExperienceAndCerti = () => {
  return (
      <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white dark:text-white">
              Animated Grid Pattern
          </p>
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