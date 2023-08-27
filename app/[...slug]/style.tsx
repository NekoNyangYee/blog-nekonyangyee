"use client"

import styled from "@emotion/styled";

export const StyledPost = styled.main(({ theme }) => `
  padding-top: 92px;

  & .post-container {
    margin: 0 auto;
    max-width: 972px;
    width: 100%;
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 16px;

    @media (max-width: 1224px) {
      column-gap: 48px;
    }

    & article {
      max-width: 652px;
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

      em {
        font-size: 13px;
        margin: 0;
      }
    
      & .post-title {
        margin-bottom: 15px;
        font-size: 30px;
        font-weight: bold; 
      }

      & hr {
        border-color: ${theme.colors.text(10)};
        margin: 15px 0;
      }

      & blockquote {
        margin: 24px 0;
        padding: 10px;
        border-left: 8px solid ${theme.colors.blue(80)};
        border-left-width: 5px;

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
        transition: background-color 0.3s
      }

      & div[data-rehype-pretty-code-fragment] {
        font-family: var(--font);
        width: 100%;
        vertical-align: baseline;
        border-radius: 8px;
        background-color: ${theme.colors.text(10)};
        word-break: break-all;

        & pre {
          margin: 1.5rem;
          padding: 1rem;
          overflow: auto;

          & code {
            border-radius: none;
            padding: 0;
            background-color: transparent;
          }
        }
      }
    }
  }
`)