"use client"

import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const StyledGoToTop = styled.div<{ topscrolled: boolean }>(({ theme, topscrolled }) => `
    display: block;
    position: fixed;
    bottom: 16%;
    right: ${topscrolled ? "80px" : "-50%"};
    transition: all .3s;
    transform: translate(${topscrolled ? "50%" : 0}, 0);
    transform-origin: center;
    z-index: 30;

    & button {
        position: fixed;
        cursor: pointer;
        border-radius: 18px;
        padding: 12px 14px;
        border: none;
        background-color: ${theme.colors.gotoTopBtnBackground(100)};
        box-shadow: 0 3px 8px rgba(0,0,0,0.24);
    }

    & svg {
        width: 30px;
        height: 30px;
        fill: ${theme.colors.buttonText(100)};
        transform: ;msFilter;
    }

    & path {
        
        padding: 10px;
        fill: ${theme.colors.gotoTopBtnText(100)};
        stroke: none;
    }
`);

const GotoTop = () => {
    const [isTopScrolled, setIsTopScrolled] = useState<boolean>(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsTopScrolled(window.scrollY > 0);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        if (!isButtonDisabled) {
            setIsButtonDisabled(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                setIsButtonDisabled(false);
            }, 100);
        }
    }

    return (
        <StyledGoToTop topscrolled={isTopScrolled}>
            <button onClick={scrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
                </svg>
            </button>
        </StyledGoToTop>
    );
};

export default GotoTop;