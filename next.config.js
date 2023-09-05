import { colors } from "./theme/colors";

const { withContentlayer } = require("next-contentlayer");
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    pwa: {
        dest: "public",
        manifest: {
            theme_color: colors.common.background(),
        },
    },
    typescriptLoaderOptions: {
        transpileOnly: false,
    },
    // 다른 추가 플러그인 설정을 여기에 추가할 수 있습니다.
};

module.exports = withPlugins(
    [
        [
            withContentlayer,
        ],
        [
            withPWA,
        ],
    ],
    nextConfig
);



