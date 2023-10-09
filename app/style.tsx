"use client"

import styled from "@emotion/styled"

const StyledContent = styled.main(() => `
    & .contents-container {
        margin: 0 auto;
        display: flex;
        max-width: 60%;
        width: 100%;
        min-height: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
       

        @media(max-width: 1224px) {
            max-width: 90%; 
        }

        @media (max-width: 872px) {
            padding-top: 70px;
        }
    }

`);

export default StyledContent;