import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 45,
    paddingRight: 15,
    backgroundColor: "white",
  },
  logo: {
    width: 150,
    height: 55,
    resizeMode: "contain",
    marginRight: "auto",
  },
  backButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: "100%",
    transform: [{ translateY: -3 }],
  },
  title: {
    color: colors.colorPrimary,
    fontSize: 18,
  },
  withLeftPadding: {
    paddingLeft: 15,
  },
});
