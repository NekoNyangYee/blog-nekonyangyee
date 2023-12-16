"use client"

import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useState } from "react";

const MainHeader = styled.header<{ scrolled: boolean }>(({ theme, scrolled }) => `
  position: fixed;
  width: 100%;
  height: 66px;
  top: 0;
  left: 0;    
  background-color: ${scrolled ? theme.colors.headerBackground(100) : theme.colors.background(100)};
  z-index: 20;
  display: none;
  
  @media (max-width: 872px) {
      display: block;
    }
  
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

    @media (max-width: 1224px) {
      max-width: 90%;
    }
    
    & svg {
      min-width: 32px;
      width: 32px;
      height: auto;

      & rect {
        fill: ${theme.colors.text()};
      }
    }
  }
`)

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainHeader scrolled={isScrolled}>
      <div className="header-container">
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
            <path d="M34 68C43.0174 68 51.6654 64.4179 58.0416 58.0416C64.4179 51.6654 68 43.0174 68 34C68 24.9826 64.4179 16.3346 58.0416 9.95837C51.6654 3.58214 43.0174 1.75575e-06 34 0L34 9.0066C40.6287 9.0066 46.9858 11.6398 51.673 16.327C56.3602 21.0142 58.9934 27.3713 58.9934 34C58.9934 40.6287 56.3602 46.9858 51.673 51.673C46.9858 56.3602 40.6287 58.9934 34 58.9934L34 68Z" fill="black" />
            <rect x="22" y="9" width="12" height="12" fill="black" />
            <rect x="22" y="31" width="8" height="8" fill="black" />
            <rect x="12" y="21" width="10" height="10" fill="black" />
            <rect x="22" y="54" width="6" height="6" fill="black" />
            <rect x="12" y="40" width="6" height="6" fill="black" />
            <rect x="18" y="50" width="4" height="4" fill="black" />
            <rect x="10" y="56" width="4" height="4" fill="black" />
            <rect x="28" y="46" width="8" height="8" fill="black" />
          </svg>
        </Link>
      </div>
    </MainHeader>
  )
};

export default Header;