"use client"

import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const StyledGoToTop = styled.div<{ topscrolled: boolean }>(({ theme, topscrolled }) => `
    display: block;
    position: fixed;
    bottom: 15%;
    right: ${topscrolled ? "80px" : "-50%"};
    transition: all .3s;
    transform: translate(${topscrolled ? "50%" : 0}, 0);
    transform-origin: center;
    z-index: 30;

    @media (max-width: 872px) {
        bottom: 28%;
    }

    & button {
        position: fixed;
        cursor: pointer;
        border-radius: 33px;
        padding: 18px;
        border: none;
        background-color: ${theme.colors.buttonBackground(100)};
    }

    & svg {
        fill: ${theme.colors.buttonText(100)};
        transform: ;msFilter;
    }

    & path {
        padding: 10px;
        fill: ${theme.colors.buttonText(100)};
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
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 24 24">
                    <path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path>
                </svg>
            </button>
        </StyledGoToTop>
    );
};

export default GotoTop;