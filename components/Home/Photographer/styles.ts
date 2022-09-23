import { StyleSheet } from "react-native";

import { colors } from "../../../styles/colors";

export default StyleSheet.create({
  main: {
    flexDirection: "row",
    marginTop: 22,
  },
  infosContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  fullName: {
    color: colors.colorSecondary,
    fontSize: 22,
  },
  price: {
    color: colors.colorMuted,
  },
  location: {
    color: colors.colorPrimary,
  },
});
