import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const {width, height} = useWindowDimensions();

  const marginTopDistance = height < 480 ? 50 : 100;
  const marginImage = height > 480 ? 36 : 18;
  let imageSize = 300;
  if (width < 380) {
    imageSize = 100
  }
  if (height < 400) {
    imageSize = 100
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }
  return (
    <ScrollView>
    <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
      <Title>Game Over!</Title>
      <View style={[styles.imageContainer, imageStyle, marginImage]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone Needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        Rounds To Guess A Number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center'
  },
  imageContainer: {
    overflow: "hidden",
    borderWidth: 2,
    borderColor: Colors.reddish800
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
    marginVertical: 20,
  },
  highlight: {
    color: Colors.reddish800,
    fontWeight: "bold",
  },
});
