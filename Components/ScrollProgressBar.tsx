"use client";

import { CSSProperties, useEffect, useState } from "react";
import styled from "@emotion/styled";

const StyledNyanCat = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -24px;
  z-index: 22;
  height: 30px;
  pointer-events: none;

  .cat,
  .rainbow {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;

    & > img,
    & > span {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
    }
  }

  .cat {
    transform: translateX(calc(var(--progress) - 47px));
    overflow: hidden;
    width: 47px;
    z-index: 2;
  }

  .rainbow {
    overflow: hidden;
    z-index: 1;
    width: calc(var(--progress));
    left: -38px;

    & > span {
      width: 100%;
      background-size: auto 30px;
    }
  }
`;

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const handleScrollAndResize = () => {
            const { documentElement } = document;
            const { scrollHeight, clientHeight, clientWidth } = documentElement;

            const totalHeight: number = scrollHeight - clientHeight;
            const scrolledHeight: number = window.scrollY;
            const progress: number = (scrolledHeight / totalHeight) * clientWidth;
            setScrollProgress(progress);
        };

        handleScrollAndResize();

        window.addEventListener("scroll", handleScrollAndResize);
        window.addEventListener("resize", handleScrollAndResize);

        return () => {
            window.removeEventListener("scroll", handleScrollAndResize);
            window.removeEventListener("resize", handleScrollAndResize);
        };
    }, []);

    useState(() => {
        const interval = setInterval(() => {
            setCount((count) => (count + 1) % 6);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <StyledNyanCat
            style={
                {
                    "--progress": `${scrollProgress}px`,
                } as CSSProperties
            }
        >
            <div className="cat">
                {Array.from({ length: 6 }).map((_, i) => (
                    <img
                        key={i}
                        alt={`cat-${i + 1}`}
                        style={{ opacity: count === i ? 1 : 0 }}
                        src={`/res/nyan/cat-${i + 1}.png`}
                    />
                ))}
            </div>
            <div className="rainbow">
                {Array.from({ length: 2 }).map((_, i) => (
                    <span
                        key={i}
                        style={{
                            opacity: Math.floor(count / 3) === i ? 1 : 0,
                            backgroundImage: `url(/res/nyan/rainbow-${i + 1}.png)`,
                        }}
                        role="img"
                        aria-label="rainbow"
                    />
                ))}
            </div>
        </StyledNyanCat>
    );
};

export default ScrollProgressBar;
