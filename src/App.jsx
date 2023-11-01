import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {Scroll, ScrollControls} from "@react-three/drei";
import {UI} from "./components/UI.jsx";
import {useEffect, useState} from "react";
import {ScrollManager} from "./components/ScrollManager.jsx";
import {Menu} from "./components/side-menu/Menu.jsx";
import {MotionConfig} from "framer-motion";

function App() {
  // State for visible section tracking
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        setMenuOpened(false);
    }, [section]);

  return (
      <>
          <MotionConfig transition={{
              type: "spring",
              mass: 5,
              stiffness: 500,
              damping: 50,
              restDelta: 0.0001
          }}>
            <Canvas shadows camera={{ position: [3, 1, 4], fov: 50 }}>
              <color attach="background" args={["#ececec"]} />
                <ScrollControls pages={4} damping={0.1}>
                    <ScrollManager section={section} onSectionChange={setSection}/>
                    <Experience section={section}/>
                    <Scroll html>
                        <UI/>
                    </Scroll>
                </ScrollControls>
            </Canvas>
            <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
          </MotionConfig>
      </>
  );
}

export default App;
