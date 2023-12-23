"use client"

import styled from "@emotion/styled";

export const StyledPost = styled.main(({ theme }) => `
  padding-top: 22px;

  & .post-container {
    margin: 0 auto;
    max-width: 972px;
    width: 100%;
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 66px 16px;

    & .time-info {
      text-align: center;
      padding: 0 0 40px 0;
    }

    @media (max-width: 1224px) {
      column-gap: 48px;
    }

    & article {
      max-width: 752px;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 10px;

      & img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 12px;
      }

      h1 {
        font-size: 24px;
        margin-bottom: 0;
      }

      h2 {
        font-size: 20px;
        margin: 25px 0 0 0;
      }

      h3 {
        font-size: 16px;
        margin: 0;
      }

      a {
        text-decoration: none;
        color: ${theme.colors.buttonBackground(80)};
        font-weight: bold;
      }

      p {
        font-size: 15px;
        line-height: 2;
      }

      & ul {
        padding-left: 20px;
      }

      & li {
        font-size: 15px;
      }

      em {
        font-size: 13px;
        margin: 0;
      }

      iframe {
        border: none;
        border-radius: 12px;
      }
    
      & .post-title {
        margin: 20px 0;
        font-size: 30px;
        font-weight: bold;
        text-align: center; 

        @media (max-width: 672px) {
          font-size: 24px;
        }
      }

      & .category-state {
        font-weight: bold;
        border-radius: 10px;
        font-size: 14px;
        letter-spacing: 1px;
        color: ${theme.colors.text(70)};
        text-align: center;
    }

    & .next-prev-container {
      display: flex;
      align-items: center;
      margin: 20px 0;
      border-radius: 12px;
      font-size: 12px;
      background-color: ${theme.colors.gray(10)};
      color: ${theme.colors.gray()};
      gap: 20px;
      font-weight: normal;
      overflow: hidden;

      @media (max-width: 672px) {
        padding: 16px;
      }

      & img {
        width: 100px;
        height: 100px;
        padding: 8px;
        object-fit: cover;
        border-radius: 19px;

        @media (max-width: 672px) {
          display: none;
        }
      }

      & p {
        margin: 0;
        color: ${theme.colors.text()};
        word-break: break-all;
        font-weight: bold;
        font-size: 16px;
      }
    }
  
    & a {
      text-decoration: none;
      color: ${theme.colors.sortBtnBackground(80)};
      font-size: 18px;
      font-weight: bold;
    }

      & hr {
        border-color: ${theme.colors.text(10)};
        margin: 15px 0;
      }

      & blockquote {
        margin: 24px 0;
        padding: 10px;
        border-left: 8px solid ${theme.colors.sortBtnBackground(80)};
        background-color: ${theme.colors.text(10)};
        border-left-width: 5px;
        border-radius: 0 12px 12px 0;

        & p {
          margin: 0;
          word-break: keep-all;
          line-height: 1.7;
        }
      }

      & code {
        border-radius: 4px;
        padding: 2px 4px;
        background-color: ${theme.colors.text(10)};
        transition: background-color 0.3s;
      }

      & pre {
        padding: 1rem;
        overflow: auto;
        border-radius: 12px;

        & code {
          border-radius: none;
          padding: 0;
          background-color: transparent;
        }
      }

      & rect {
        fill: none;
        stroke: ${theme.colors.text()};
      }

      & circle {
        stroke: ${theme.colors.text()};
      }

      & time {
        margin-right: 10px;
      }
    }

    & .home-btn {
      position: relative;
      left: 30px;

      @media (max-width: 1224px) {
        left: 10px;
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
  }
`);

export const SvgBlogInfo = styled.svg(() => `
  position: relative;
  width: 16px;
  top: 10px;
`);