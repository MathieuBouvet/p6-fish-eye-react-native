import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  main: {
    position: "absolute",
    alignItems: "center",
    right: 0,
    backgroundColor: "white",
  },
  mainOpened: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  filterButton: {
    width: 65,
    height: 65,
  },
  closeButton: {
    width: 50,
    alignSelf: "stretch",
  },
  icon: {
    color: colors.colorPrimary,
  },
  tagContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 15,
    paddingBottom: 10,
  },
  tag: {
    marginTop: 5,
    marginRight: 5,
  },
});
