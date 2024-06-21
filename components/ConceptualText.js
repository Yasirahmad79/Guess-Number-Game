import { StyleSheet, Text } from 'react-native'
import Colors from '../constants/colors';
const ConceptualText = ({children}) => {
  return (
    <Text style={styles.conceptualText}>{children}</Text>
  )
}

export default ConceptualText;

const styles = StyleSheet.create({
    conceptualText: {
        color: Colors.yellowish,
        fontSize: 26,
      }
})