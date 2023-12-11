"use client"

import { memo } from "react";

const Giscus = memo(() => (
    <section
        ref={(elem) => {
            if (!elem) return;
            const scriptElement = document.createElement("script");
            scriptElement.src = "https://giscus.app/client.js";
            scriptElement.async = true;
            scriptElement.setAttribute("data-repo", "NekoNyangYee/nekonyangyee-blog-comments");
            scriptElement.setAttribute("data-repo-id", "R_kgDOKDCAgg");
            scriptElement.setAttribute("data-category", "General");
            scriptElement.setAttribute("data-category-id", "DIC_kwDOKDCAgs4CYU44");
            scriptElement.setAttribute("data-mapping", "pathname");
            scriptElement.setAttribute("data-reactions-enabled", "1");
            scriptElement.setAttribute("data-emit-metadata", "0");
            scriptElement.setAttribute("data-input-position", "bottom");
            scriptElement.setAttribute("data-theme", "preferred_color_scheme");
            scriptElement.setAttribute("data-lang", "ko");
            scriptElement.setAttribute("crossorigin", "anonymous");
            elem.appendChild(scriptElement); ``
        }}
    />
)
)

export default Giscus;