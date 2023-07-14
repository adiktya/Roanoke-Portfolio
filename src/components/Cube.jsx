import React from 'react'
import { RenderTexture, PerspectiveCamera} from '@react-three/drei'
import { useRef } from 'react'
import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cube = () => {
    const textRef = useRef();
    useFrame(
        (state) =>
        (textRef.current.position.x = Math.sin(state.clock.elapsedTime)*2)
    );


return (
         <mesh>
            <boxGeometry />
            <meshStandardMaterial >
                <RenderTexture attach="map">
                            <PerspectiveCamera makeDefault position = {[0,0,5]} />
                            <color attach="background" args= {["#2c0650"]}/>
                            <Text ref={textRef} fontSize={1} color = "#555">
                        Lorem Ipsum
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube;