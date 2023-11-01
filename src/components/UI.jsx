import {Section} from "./content/Section.jsx";
import {AboutSection} from "./sections/About.jsx";
import {ContactSection} from "./sections/Contact.jsx";
import {SkillsSection} from "./sections/skills-section/skills-section.jsx";

export const UI = () => {
    return(
        <div className='flex flex-col items-center w-screen'>
            <AboutSection/>
            <SkillsSection/>
            <Section><h1>My works</h1></Section>
            <ContactSection/>
        </div>
    )
}