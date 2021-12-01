const tintColorLight = "#14B8B5"; // || "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#4a4a4a",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    primary: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#1c1c1c", //"#121212",
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
