const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    buttons: {
      primary: {
        main: "#2f95dc",
        active: "#60E660",
        passiv: "#2f95dc",
      },
      secondary: {
        active: "dimgrey",
        passiv: "darkgray",
      },
    },
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    buttons: {
      primary: {
        active: "#2f95dc",
        passiv: "#2f95dc",
      },
      secondary: {
        active: "dimgrey",
        passiv: "darkgray",
      },
    },
  },
};
