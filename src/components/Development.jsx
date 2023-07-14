import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Atom from "./Atom";
import styled from "styled-components";

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 200px;
    right: 100px;

    @media only screen and (max-width: 768px){
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
`

const Development = () => {
    return ( 
        <>
            <Canvas camera = {{position: [0,0,10]}}>
            <Suspense fallback={null}>
                <Atom />
                <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
            </Canvas>
            <Desc>
                    We (just one) design world class products carefully considering the market success of your product.
            </Desc>
        </>
    );
};

export default Development;