import { StyleSheet, View } from "react-native";
import Colors from '../constants/colors'

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};
export default Card;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 18,
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
        backgroundColor: Colors.reddish800,
        borderRadius: 8,
        elevation: 6,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.25,
      }
})
