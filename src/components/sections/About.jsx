import {Section} from "../content/Section.jsx";
import {motion} from "framer-motion";

export const AboutSection = () => {
    return(
        <Section>
            <h1 className='text-4xl md:text-6xl font-extrabold md:leading-snug'>Hello there. I am
                <br/>
                <span className='text bg-white px-1 italic'>Vladyslav</span>
            </h1>
            <motion.p className='text-xl text-gray-600 mt-4'
            initial={{
                opacity: 0,
                y: 25
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 1.5
                }
            }}>
                a Junior Web Developer with a passion for coding.</motion.p>
            <motion.button className='bg-indigo-600 text-white py-2 md:py-4 px-4 md:px-8 rounded-lg font-bold text-lg mt-4 md:mt-8'
                           initial={{
                               opacity: 0,
                               y: 25
                           }}
                           whileInView={{
                               opacity: 1,
                               y: 0,
                               transition: {
                                   duration: 1,
                                   delay: 2
                               }
                           }}>
                Contact me
            </motion.button>
        </Section>
    )
}