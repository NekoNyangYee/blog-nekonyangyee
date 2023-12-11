"use client";

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Post } from "./PostList";
import Link from "next/link";
import ScrollProgressBar from "./ScrollProgressBar";

const MainContentHeader = styled.header<{ scrolled: boolean }>(
  ({ theme, scrolled }) => `
  position: fixed;
  width: 100%;
  height: 66px;
  top: 0;
  left: 0;
  border-bottom:  ${
    scrolled ? `1px solid ${theme.colors.text(10)}` : "none"
  };    
  background-color: ${theme.colors.background(80)};
  backdrop-filter: blur(20px);
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
        text-align: center;
        flex: 1;
        margin: 0 auto;
        display: ${scrolled ? "block" : "none"};
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
      min-width: 24px;
      width: 14px;
      height: auto;

      & rect {
        fill: ${theme.colors.text()};
      }
    }
  }
`
);

const ContentHeader = ({ title, date, category }: Post) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainContentHeader scrolled={isScrolled}>
      <div className="header-container">
        <div className="history-back">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <rect x="22" y="2" width="3" height="15" rx="1" fill="black" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 15C6.89543 15 6 15.8954 6 17V30C6 31.1046 6.89543 32 8 32H12V23C12 22.4477 12.4477 22 13 22H20C20.5523 22 21 22.4477 21 23V32H25C26.1046 32 27 31.1046 27 30V17C27 15.8954 26.1046 15 25 15H8Z"
                fill="black"
              />
              <path
                d="M15.0648 1.47865C15.8504 0.669251 17.1496 0.669252 17.9352 1.47865L29.7068 13.6071C30.9378 14.8753 30.0391 17 28.2717 17H4.72832C2.96087 17 2.06217 14.8753 3.29316 13.607L15.0648 1.47865Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <div className="post-info">
          <h2>{title}</h2>
          <p>
            {date.slice(0, 10)} | {category}
          </p>
        </div>
      </div>
      <ScrollProgressBar />
    </MainContentHeader>
  );
};

export default ContentHeader;
