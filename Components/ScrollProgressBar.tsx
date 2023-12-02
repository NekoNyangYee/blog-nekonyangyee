"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const StyledProgressBar = styled.div<{ width: number, scrolled: boolean }>(({ theme, scrolled, width }) => `
    position: fixed;
    left: 0;
    top: 66px;
    height: 5px;
    top: 67px;
    background-color: ${width == 100 ? theme.colors.green(100) : theme.colors.buttonBackground(100)};
    z-index: 21;
`);

const StyledMovingText = styled.div<{ width: number, scrolled: boolean }>(({ scrolled, width }) => `
    position: fixed;
    left: ${width}%;
    transform: translateX(-${width}%);
    height: 20px;
    width: auto;
    z-index: 22;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-98%);

    & img {
        position: relative;
        top: 38px;
        width: 40px;
    }
`);

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolledHeight = window.scrollY;
            const progress = (scrolledHeight / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <StyledProgressBar style={{ width: `${scrollProgress}%` }} scrolled={isScrolled} width={scrollProgress} />
            <StyledMovingText width={scrollProgress} scrolled={isScrolled}>
                <img src="./cat-nyan-cat.gif" />
            </StyledMovingText>
        </>
    );
};

export default ScrollProgressBar;