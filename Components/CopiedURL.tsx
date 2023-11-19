"use client"

import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const StyledCopyURL = styled.button<{ copied: boolean }>(({ theme }) => `
    background-color: ${theme.colors.black()};
    color: ${theme.colors.background(100)};
    border: 1px solid ${theme.colors.gray(40)};
    font-size: 14px;
    padding: 20px 20px;
    cursor: pointer;
    align-items: center;
    border-radius: 30px;
    text-align: center;
    margin: 20px 0;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center; 
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    & span {
        color: ${theme.colors.white()};
    }

    & path {
        width: 100%;
        fill: ${theme.colors.white()};
        stroke: ${theme.colors.white()};
    }
`);

const StyledCoppiedBtn = styled.div<{ copied: boolean, scrolled: boolean }>(({ theme, scrolled }) => `
    position: fixed;
    bottom: 16%;
    color: ${theme.colors.background(100)};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    right: ${scrolled ? "50px" : "-50%"};
    transition: all .3s;
    transform: translate(${scrolled ? "50%" : 0}, 0);
    transform-origin: center;
    z-index: 40;
`);

const Snackbar = styled.div<{ show: boolean }>(({ theme, show }) => `
    position: fixed;
    min-width: 200px;
    text-align: center;
    bottom: ${show ? "20px" : "-20%"};
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.text()};
    color: ${theme.colors.background()};
    padding: 15px;
    transition: all .3s;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    z-index: 30;
`);

const CopiedUrl = () => {
    const [copied, setCopied] = useState<boolean>(false);
    const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
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
        setShowSnackbar(true);

        setTimeout(() => {
            setCopied(false);
            setShowSnackbar(false);
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
                </StyledCopyURL>
            </StyledCoppiedBtn>

            <Snackbar show={showSnackbar}>
                링크를 클립보드에 복사했어요.
            </Snackbar>
        </>
    );
}

export default CopiedUrl;

