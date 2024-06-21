import { Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};
export default NumberContainer;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  text: {
    fontSize: deviceHeight < 380 ? 40 : 30,
    color: Colors.yellowish,
    textAlign: "center",
    padding: deviceHeight < 380 ? 20 : 10,
    marginHorizontal: 50,
    marginBottom: deviceHeight < 380 ? 20 : 10,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: Colors.yellowish,
    borderRadius: 8,
  },
});
