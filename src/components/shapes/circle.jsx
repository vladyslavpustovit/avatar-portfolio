import {Shape, ExtrudeGeometry} from "three";
export default function CircleExtrusion() {
    // Create a 2D circle shape
    const circleShape = new Shape();
    circleShape.absarc(0, 0, 1.2, 0, Math.PI * 2);

    // Extrude the circle shape
    const extrusionSettings = {
        depth: 0.3,
        bevelEnabled: false,
        curveSegments: 16
    };
    const geometry = new ExtrudeGeometry(circleShape, extrusionSettings);

    return (
        <group>
            <mesh geometry={geometry} rotation-x={-Math.PI / 2} position-y={-0.3001}>
                <meshStandardMaterial color="green" />
            </mesh>

            {/* Plane floor */}
            {/*<mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>*/}
            {/*    <planeGeometry/>*/}
            {/*    <meshStandardMaterial color='white'/>*/}
            {/*</mesh>*/}
        </group>
    );
}