import {motion} from "framer-motion";

export const Badge = ({title, color, icon, index}) => {
    const badgeFont = {
        fontFamily: 'Tektur, sans-serif',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    };

    return(
        <motion.div className={`${color} w-full flex items-center text-white text-xs md:text-base px-2 py-1.5 rounded`}
                    initial={{
                        opacity: 0,
                    }}
                    variants={{
                        visible: {
                            opacity: 1,
                            transition: {
                                duration: 1,
                                delay: 1 + index * 0.1
                            }
                        }
                    }}>
            <i className={`${icon} mr-1 md:mr-2`}></i>
            <p style={badgeFont}>{title}</p>
        </motion.div>
    )
}