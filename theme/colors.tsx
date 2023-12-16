const common = {
    white: (opacity?: number) =>
        opacity ? `rgba(255, 255, 255, ${opacity / 100})` : "white",
    black: (opacity?: number) =>
        opacity ? `rgba(21, 21, 21, ${opacity / 100})` : "black",
    gray: (opacity?: number) =>
        opacity ? `rgba(136, 136, 136, ${opacity / 100})` : "grey",
    lightbody: (opacity?: number) =>
        opacity ? `rgba(254, 247, 255, ${opacity / 100})` : "grey",
    lightBtnBackground: (opacity?: number) =>
        opacity ? `rgba(103, 80, 164, ${opacity / 100})` : null,
    darkBtnBackground: (opacity?: number) =>
        opacity ? `rgba(208, 188, 255, ${opacity / 100})` : null,
    lightbtntext: (opacity?: number) =>
        opacity ? `rgba(255, 255, 255, ${opacity / 100})` : null,
    darkBtnText: (opacity?: number) =>
        opacity ? `rgba(56, 30, 114, ${opacity / 100})` : null,
    lightGotoTopBtn: (opacity?: number) =>
        opacity ? `rgba(234, 221, 255, ${opacity / 100})` : null,
    darkGotoTopBtn: (opacity?: number) =>
        opacity ? `rgba(79, 55, 139, ${opacity / 100})` : null,
    lightGotoTopBtnText: (opacity?: number) =>
        opacity ? `rgba(33, 0, 93, ${opacity / 100})` : null,
    darkGotoTopBtnText: (opacity?: number) =>
        opacity ? `rgba(234, 221, 255, ${opacity / 100})` : null,
    lightHeaderBackground: (opacity?: number) =>
        opacity ? `rgba(243, 237, 247, ${opacity / 100})` : null,
    darkHeaderBackground: (opacity?: number) =>
        opacity ? `rgba(33, 31, 38, ${opacity / 100})` : null,
    lightInputBackground: (opacity?: number) =>
        opacity ? `rgba(230, 224, 233, ${opacity / 100})` : null,
    darkInputBackground: (opacity?: number) =>
        opacity ? `rgba(54, 52, 59, ${opacity / 100})` : null,
    lightInputBorder: (opacity?: number) =>
        opacity ? `rgba(73, 69, 79, ${opacity / 100})` : null,
    darkInputBorder: (opacity?: number) =>
        opacity ? `rgba(202, 196, 208, ${opacity / 100})` : null,
};

const light = {
    text: common.black,
    background: common.lightbody,
    buttonText: common.lightbtntext,
    buttonBackground: common.lightBtnBackground,
    categoryButtonBackground: common.black,
    gotoTopBtnBackground: common.lightGotoTopBtn,
    gotoTopBtnText: common.lightGotoTopBtnText,
    headerBackground: common.lightHeaderBackground,
    inputBackground: common.lightInputBackground,
    inputBorder: common.lightInputBorder,
};

const dark = {
    text: common.white,
    background: common.black,
    buttonText: common.darkBtnText,
    buttonBackground: common.darkBtnBackground,
    categoryButtonBackground: common.gray,
    gotoTopBtnBackground: common.darkGotoTopBtn,
    gotoTopBtnText: common.darkGotoTopBtnText,
    headerBackground: common.darkHeaderBackground,
    inputBackground: common.darkInputBackground,
    inputBorder: common.darkInputBorder,
};

const colors = { dark, light, common };

export default colors;