import { StyleSheet } from "react-native";

export const sharedStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 15,
  },
  sectionContainer: {
    borderColor: "transparent",
    borderRadius: 5,
    borderWidth: 1,
    minHeight: 200,
    maxHeight: 280,
    position: "relative",
    width: "100%",
    padding: 5,
    marginBottom: 20,
  },
  flexContainer: {
    flex: 1,
    width: "100%",
    padding: 5,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 15,
  },
});
