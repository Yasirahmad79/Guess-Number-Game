import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
        padding: 12,
        marginBottom: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: Colors.yellowish,
        borderRadius: 8
    }
});
