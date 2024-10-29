import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic'
export default function index() {

    const phrase = "As a passionate MERN developer, I’m focused on building sleek and efficient applications. I’m eager to bring fresh ideas to the digital world and collaborate to create impactful solutions—clear, simple, and effective.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}> My passion for design, code, and interaction drives me to create meaningful web experiences, positioning me to bring fresh perspectives to the world of web development.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <Magnetic><p>About me</p></Magnetic>  
                    </Rounded>
                </div>
            </div>
        </div>
    )
}