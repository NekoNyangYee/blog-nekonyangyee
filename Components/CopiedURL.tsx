"use client"

import styled from "@emotion/styled";
import { useState } from "react";
import { Post } from "./PostList";

const StyledCopyURL = styled.button<{ copied: boolean }>(({ theme, copied }) => `
    width: 100%;
    position: sticky;
    bottom: 20px;
    background-color: ${copied ? theme.colors.copiedButtonBackground(70) : theme.colors.buttonBackground(80)};
    color: ${copied ? theme.colors.buttonText() : theme.colors.black()};
    font-size: 14px;
    padding: 15px 10px;
    cursor: pointer;
    align-items: center;
    border-radius: 12px;
    text-align: center;
    margin: 20px 0;
    display: flex;
    gap: 8px;
    justify-content: center; /* 세로 가운데 정렬 */
    align-items: center; /* 가로 가운데 정렬 */
    border: none;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    & span {
        color: ${theme.colors.white()};
    }

    & path {
        width: 100%;
        fill: ${theme.colors.white()};
        transform: ;msFilter:;
        stroke: ${theme.colors.white()};
    }
`);

interface CopyUrlButtonProps {
    url: Post;
}

const CopiedUrl = ({ url }: CopyUrlButtonProps) => {
    const [copied, setCopied] = useState(false);

    const copyUrlToClipboard = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        const fullUrl = window.location.href;
        navigator.clipboard.writeText(fullUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <StyledCopyURL onClick={copyUrlToClipboard} copied={copied}>
            {copied ?
                (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                            <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                        </svg>
                        <span>게시물이 클립보드에 정상적으로 복사되었습니다!</span>
                    </>
                )
                : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                            <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                        </svg>
                        <span>게시물 공유하기</span>
                    </>
                )}
        </StyledCopyURL>
    );
}

export default CopiedUrl;