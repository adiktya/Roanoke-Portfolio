import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Shoe from "./Shoe";
import { OrbitControls, Stage } from "@react-three/drei";
import styled from "styled-components";

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    bottom: 200px;
    right: 100;

    @media only screen and (max-width: 768px) {
        top:0;
        bottom: 0;
        left:0;
        right: 0;
        margin auto;
    }
`

const ProductDesign =()=> {
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <Shoe />
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

export default ProductDesign