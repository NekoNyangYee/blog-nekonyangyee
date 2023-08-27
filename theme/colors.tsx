const common = {
    white: (opacity?: number) =>
        opacity ? `rgba(255, 255, 255, ${opacity / 100})` : "white",
    black: (opacity?: number) =>
        opacity ? `rgba(21, 21, 21, ${opacity / 100})` : "black",
    gray: (opacity?: number) =>
        opacity ? `rgba(136, 136, 136, ${opacity / 100})` : "grey",
    purple: (opacity?: number) =>
        opacity ? `rgba(110, 16, 204, ${opacity / 100})` : "purple",
    red: (opacity?: number) =>
        opacity ? `rgba(252, 79, 79, ${opacity / 100})` : "red",
    green: (opacity?: number) =>
        opacity ? `rgba(74, 216, 113, ${opacity / 100})` : "green",
    blue: (opacity?: number) =>
        opacity ? `rgba(60, 137, 255, ${opacity / 100})` : "blue",
    yellow: (opacity?: number) =>
        opacity ? `rgba(255, 191, 68, ${opacity / 100})` : "yellow",
};

const light = {
    text: common.black,
    background: common.white,
    buttonText: common.white,
    buttonBackground: common.blue,
    copiedButtonBackground: common.green
};

const dark = {
    text: common.white,
    background: common.black,
    buttonText: common.white,
    buttonBackground: common.blue,
    copiedButtonBackground: common.green
};

const colors = { dark, light, common };

export default colors;