import React, {Suspense} from "react";
import styled from "styled-components";
import Mac from "./Mac";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Stage } from "@react-three/drei";

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: white;
    position: absolute;
    top: 100px;
    right: 100px;
    border-radius: 10px;

    @media only screen and (max-width: 768px) {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
`

const WebDesign = () => {
    return ( 
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <Stage environment = "city" intensity={0.6}>
                        <Mac /> 
                    </Stage>
                    <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
            </Canvas>
            <Desc>
            We (just one) design world class products carefully considering the market success of your product.
            </Desc>
        </>
    )
}

export default WebDesign;
