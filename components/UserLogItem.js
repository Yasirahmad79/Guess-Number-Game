import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

const UserLogItem = ({roundNumber, guess})=>{
return(
    <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumber}</Text>
        <Text style={styles.itemText}>Opponent guess: {guess}</Text>
    </View>
)
}
export default UserLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.reddish800,
        borderWidth: 1,
        borderRadius: 40,
        width: '90%',
        marginLeft: 20,
        marginVertical: 10,
        padding: 12,
        elevation: 4,
        backgroundColor: Colors.yellowish,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {
        color: Colors.reddish800,
        fontWeight: 'bold',
    }
})