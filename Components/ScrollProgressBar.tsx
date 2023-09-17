"use client"

import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const StyledProgressBar = styled.div(({ theme }) => `
    position: fixed;
    left: 0;
    top: 66px;
    height: 4px;
    background-color: ${theme.colors.buttonBackground(100)};
    z-index: 20;
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <StyledProgressBar style={{ width: `${scrollProgress}%` }} />
    );
};

export default ScrollProgressBar;