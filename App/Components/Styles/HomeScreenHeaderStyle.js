import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    alignItems: "center",
    width: "100%",
    height: (160 / 736) * Dimensions.get("screen").height
  },
  text: {
    fontSize: 30,
    color: "white",
    marginTop: (15 / 736) * Dimensions.get("screen").height
  }
});
export default styles;
