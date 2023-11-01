import {Section} from "../../content/Section.jsx";
import {Languages} from "./Languages.jsx";
import {Skills} from "./Skills.jsx";
import {motion} from 'framer-motion'
export const SkillsSection = () => {
    return(
        <Section>
            <motion.div whileInView={'visible'}>
                <Skills/>
                <Languages/>
            </motion.div>
        </Section>
    )
}