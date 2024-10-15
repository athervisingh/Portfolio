import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const BigName = () => {
    const marqueeRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position
    const [scrollDirection, setScrollDirection] = useState('down'); // Initial direction for scrolling
    const [isScrolling, setIsScrolling] = useState(false); // State to track if user is scrolling

    // Scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY; // Get current scroll position

            // Determine scroll direction and update state
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down'); // Scrolling down
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up'); // Scrolling up
            }

            setLastScrollY(currentScrollY);
            setIsScrolling(true); // Set scrolling state to true
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]); // Only runs on lastScrollY change

    // GSAP animation based on scroll direction
    useEffect(() => {
        const marqueeElement = marqueeRef.current;
        const totalWidth = marqueeElement.scrollWidth / 2; // Half the width for the duplicated text

        // Create seamless scrolling effect with GSAP
        gsap.set(marqueeElement, { x: 0 }); // Ensure initial position

        // Create tween based on scroll direction
        const tween = gsap.to(marqueeElement, {
            x: scrollDirection === 'down' ? -totalWidth : totalWidth, // Move based on scroll direction
            duration: 100,       // Adjust the speed here
            ease: "none",       // Linear, smooth scrolling without easing
            repeat: -1,         // Repeat infinitely
            paused: true,       // Start paused
        });

        // Start the tween if the user is scrolling
        if (isScrolling) {
            tween.resume();
        } else {
            tween.pause(); // Pause the tween if not scrolling
        }

        return () => {
            tween.kill(); // Clean up tween on component unmount
        };
    }, [scrollDirection, isScrolling]); // Runs on scrollDirection and isScrolling change

    // Start scrolling to the left initially
    useEffect(() => {
        const marqueeElement = marqueeRef.current;
        gsap.to(marqueeElement, {
            x: -marqueeElement.scrollWidth, // Move left initially
            duration: 100, // Duration of initial animation
            ease: "none", // Linear movement
            repeat: -1 // Repeat infinitely
        });
    }, []); // Only runs once when component mounts

    return (
        <div className="fixed z-50 bottom-14 w-[100vw] h-[30vh] overflow-hidden items-center flex justify-center">
            <div
                ref={marqueeRef}
                className="whitespace-nowrap text-white text-9xl"
                style={{ display: 'inline-block' }}
            >
                {/* Duplicate the text for seamless scrolling */}
                Athervi Singh &#8212; Athervi Singh &#8212; Athervi Singh &#8212;
                Athervi Singh &#8212; Athervi Singh &#8212; Athervi Singh &#8212;
                Athervi Singh &#8212; Athervi Singh &#8212;
                {/* Repeating the text again */}
                Athervi Singh &#8212; Athervi Singh &#8212; Athervi Singh &#8212;
                Athervi Singh &#8212; Athervi Singh &#8212; Athervi Singh &#8212;
                Athervi Singh &#8212; Athervi Singh &#8212;
            </div>
        </div>
    );
};

export default BigName;
