const tintColorLight = "#16CAC7"; // || "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    primary: "#16CAC7",
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    buttons: {
      primary: {
        active: "#0E7C7B",
        passiv: "#0E7C7B",
      },
      secondary: {
        active: "dimgrey",
        passiv: "darkgray",
      },
    },
  },
};
