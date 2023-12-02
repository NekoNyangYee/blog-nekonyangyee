"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const StyledMovingText = styled.div<{ width: number }>(({ width }) => `
    position: fixed;
    left: ${width}%;
    transform: translateX(-${width}%);
    height: 20px;
    width: auto;
    z-index: 22;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        position: relative;
        top: 44px;
        width: 68px;
    }
`);

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolledHeight = window.scrollY;
            const progress = (scrolledHeight / totalHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

            <StyledMovingText width={scrollProgress} >
                <img src="./cat-nyan-cat.png" />
            </StyledMovingText>
        </>
    );
};

export default ScrollProgressBar;