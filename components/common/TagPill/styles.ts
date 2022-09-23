import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  main: {
    position: "relative",
    flexDirection: "row",
    borderRadius: 50,
    paddingTop: 3,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 12,
  },
  mainActive: {
    backgroundColor: colors.colorPrimary,
  },
  tag: {
    color: colors.colorPrimary,
    fontWeight: "bold",
    fontSize: 12,
  },
  tagActive: {
    color: "white",
  },
  hashTag: {
    marginRight: 2,
  },
  border: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 50,
    borderColor: colors.colorPrimary,
    borderWidth: 2,
  },
});
