import {ContactShadows, Environment, OrbitControls, Sky} from "@react-three/drei";
import {Avatar} from "./GLTFmodels/Avatar.jsx";
import Laptop from "./GLTFmodels/Laptop.jsx";
import {Armchair} from "./GLTFmodels/Armchair.jsx";
import {useControls} from "leva";
import CircleExtrusion from "./shapes/circle.jsx";
import { useSpring, a } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';

export const Experience = () => {

    // Leva animation controls
    const {animation} = useControls({
        animation: {
            value: 'Typing',
            options: ['Typing', 'Standing', 'Waving']
        }
    })

    // Spring transitions
    const [armchairProps, setArmchairProps] = useSpring(() => ({
        position: [0, 0.65, 0],
        config: { duration: 1000 },
    }));

    const [laptopProps, setLaptopProps] = useSpring(() => ({
        position: [-0.2, 0.65, 0.35],
        config: { duration: 1000 },
    }));

    useFrame(() => {
        if (animation === 'Typing') {
            setArmchairProps.start({ position: [0, 0.65, 0] });
            setLaptopProps.start({ position: [-0.2, 0.65, 0.35] });
        } else {
            setArmchairProps.start({ position: [0, 3, 0] }); // Move Armchair out of sight
            setLaptopProps.start({ position: [-0.2, 3, 0.35] }); // Move Laptop out of sight
        }
    });

    return (
        <>
            <OrbitControls />
            <Sky/>
            <Environment preset={"sunset"}/>
            <group position-y={-1}>
                <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color='#000000'/>
                <Avatar animation={animation}/>
                {animation === 'Typing' && (
                    <>
                        <a.group {...armchairProps}>
                            <Armchair scale={0.8} />
                        </a.group>
                        <a.group {...laptopProps}>
                            <Laptop scale={0.5} />
                        </a.group>
                    </>
                )}
                {/*The floor mesh*/}
                <CircleExtrusion/>
            </group>
        </>
    );
};
