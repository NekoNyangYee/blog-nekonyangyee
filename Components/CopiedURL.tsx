"use client"

import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const StyledCopyURL = styled.button<{ copied: boolean }>(({ theme, copied }) => `
    width: ${copied ? "120px" : "60px"};
    height: 60px;
    background-color: ${theme.colors.buttonBackground(100)};
    color: ${theme.colors.background(100)};
    border: none;
    font-size: 14px;
    cursor: pointer;
    align-items: center;
    border-radius: 30px;
    text-align: center;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center; 
    overflow: hidden;
    transition: width 0.3s ease, left 0.3s ease, right 0.3s ease;

    & path {
        width: 100%;
        fill: ${theme.colors.buttonText(100)};
        stroke: ${theme.colors.buttonText(100)};
    }

    & span {
        color: ${theme.colors.buttonText(100)};
        position: relative;
        display: ${copied ? "block" : "none"};
        margin-left: 6px;
        transition: right 0.3s ease;
    }
`);

const StyledCoppiedBtn = styled.div<{ copied: boolean, scrolled: boolean }>(({ theme, scrolled, copied }) => `
    position: fixed;
    bottom: ${scrolled ? "16%" : "8%"};
    color: ${theme.colors.background(100)};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 20px;
    transition: all .3s;
    transform-origin: center;
    z-index: 40;
`);


const CopiedUrl = () => {
    const [copied, setCopied] = useState<boolean>(false);
    const [copiedScrolled, setCopiedScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setCopiedScrolled(window.scrollY > 0);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const copyUrlToClipboard = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        const fullUrl = window.location.href;
        navigator.clipboard.writeText(fullUrl);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <>
            <StyledCoppiedBtn copied={copied} scrolled={copiedScrolled}>
                <StyledCopyURL onClick={copyUrlToClipboard} copied={copied}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                        <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                    </svg>
                    <span>Copied!</span>
                </StyledCopyURL>
            </StyledCoppiedBtn>
        </>
    );
}

export default CopiedUrl;

