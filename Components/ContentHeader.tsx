"use client"

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Post } from "./PostList";
import Link from "next/link";

const MainContentHeader = styled.header<{ scrolled: boolean, infoscrolled: boolean }>(({ theme, scrolled, infoscrolled }) => `
  position: fixed;
  width: 100%;
  height: 66px;
  top: 0;
  left: 0;
  border-bottom: ${scrolled ? `1px solid ${theme.colors.text(10)}` : '#fffffff'};    
  background-color: ${theme.colors.background(100)};
  z-index: 20;
  
  & .header-container {
    margin: 0 auto;
    position: relative;
    width: 100%;
    max-width: 60%;
    max-height: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    & .post-info {
        display: ${infoscrolled ? "block" : "none"};
        text-align: center;
        flex: 1;
        margin: 0 auto;
        justify-content: center;
        max-width: 100%;

        @media (max-width: 672px) {
            max-width: 250px;
        }
    }

    & h2 {
        font-size: 14px;
        margin: 0 0 8px 0;
        word-break: break-all;

        @media (max-width: 672px) {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    & p {
        margin: 0;
        font-size: 12px;
    }

    & button {
        border: none;
        background: none;
        cursor: pointer;
    }

    @media (max-width: 1224px) {
      max-width: 90%;
    }

    & svg {
      min-width: 14px;
      width: 14px;
      height: auto;

      & rect {
        fill: ${theme.colors.text()};
      }
    }
  }
`)


const ContentHeader = ({ title, date, category }: Post) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isInfoScrolled, setIsInfoScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 140);
        }

        const infoScroll = () => {
            setIsInfoScrolled(window.scrollY > 140);
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', infoScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', infoScroll);
        };
    }, []);

    const backButton = () => {
        return window.history.back();
    }

    return (
        <MainContentHeader scrolled={isScrolled} infoscrolled={isInfoScrolled}>
            <div className="header-container">
                <div className="history-back">
                    <button onClick={backButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="32" viewBox="0 0 19 32" fill="none">
                            <rect x="2.82842" y="13.0659" width="21.8165" height="4" transform="rotate(45 2.82842 13.0659)" fill="black" />
                            <rect x="18.7332" y="2.83154" width="22.4849" height="4.00443" transform="rotate(135 18.7332 2.83154)" fill="black" />
                        </svg>
                    </button>
                </div>
                <div className="post-info">
                    <h2>{title}</h2>
                    <p>{date.slice(0, 10)} | {category}</p>
                </div>
            </div>
        </MainContentHeader>
    )
};

export default ContentHeader;