import {motion} from "framer-motion";
import {languages} from "../../../data/languages.jsx";

export const Languages = () => {
    return(
        <>
            <h2 className='text-4xl md:text-5xl font-bold mt-10'>I speak these languages:</h2>
            <div className='mt-8 space-y-4'>
                {
                    languages.map((language, index)=> (
                        <div className='w-64' key={index}>
                            <h3 className='text-xl font-bold text-gray-800'>{language.title}</h3>
                            <div className='h-2 w-full bg-gray-200 rounded-full mt-2'>
                                <motion.div className='h-full bg-indigo-500 rounded-full'
                                     style={{width: `${language.level}%`}}
                                     initial={{
                                         scaleX: 0,
                                         originX: 0,
                                     }}
                                     variants={{
                                         visible: {
                                             scaleX: 1,
                                             transition: {
                                                 duration: 1,
                                                 delay: 1.5
                                             }
                                         }
                                }}>
                                </motion.div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}