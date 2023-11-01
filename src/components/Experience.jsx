import {ContactShadows, Environment, OrbitControls} from "@react-three/drei";
import {Avatar} from "./GLTFmodels/Avatar.jsx";
import Laptop from "./GLTFmodels/Laptop.jsx";
import {Armchair} from "./GLTFmodels/Armchair.jsx";
import {useControls} from "leva";
import CircleExtrusion from "./shapes/circle.jsx";
import {motion} from "framer-motion-3d";
import * as THREE from 'three'

export const Experience = (props) => {
    const {section} = props;

    // Leva animation controls
    const {animation} = useControls({
        animation: {
            value: 'Typing',
            options: ['Typing', 'Standing', 'Waving']
        }
    })

    return (
        <>
            {/*<OrbitControls />*/}
            <Environment preset={"sunset"}/>
            <motion.group
                position={[2, 0, -1]}>
                <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color='#000000'/>
                <Avatar animation={animation}/>
                {animation === 'Typing' && (
                        <motion.group
                        animate={{
                            scale: section === 1 ? 1 : 0,
                        }}>
                            <group position={[0, 0.65, 0]}>
                                <Armchair scale={0.8} />
                            </group>
                            <group position={[-0.2, 0.65, 0.35]}>
                                <Laptop scale={0.5} />
                            </group>
                        </motion.group>
                )}
                {/*The floor mesh*/}
                <CircleExtrusion/>
            </motion.group>
        </>
    );
};
