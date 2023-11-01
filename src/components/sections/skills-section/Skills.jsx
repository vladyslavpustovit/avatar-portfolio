import {Badge} from "../../content/Badge.jsx";
import {badges} from '../../../data/skills.jsx'

export const Skills = () => {
    return (
        <>
            <h2 className='text-4xl md:text-5xl font-bold mt-10'>Tech-Stack:</h2>
            <div className="bg-gray-200 mt-4 space-y-4">
                <div className="max-w-2xl mx-auto">
                    <div className="p-4">
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
                                {badges.map((skill, index) => (
                                    <Badge key={index} title={skill.title} color={skill.color} icon={skill.icon} index={index}/>
                                ))}
                            </div>
                        </div>
                </div>
            </div>
            </>
    );
}