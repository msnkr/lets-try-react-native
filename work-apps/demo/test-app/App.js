import { StyleSheet, Text, View, ImageBackground } from "react-native";

import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import image5 from "./assets/5.jpg";
import image6 from "./assets/6.jpg";
import image7 from "./assets/7.jpg";
import image8 from "./assets/8.jpg";
import image9 from "./assets/9.jpg";
import image10 from "./assets/10.jpg";
import image11 from "./assets/11.jpg";
import image12 from "./assets/12.jpg";
import image13 from "./assets/13.jpg";
import image14 from "./assets/14.jpg";

const imageArr = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
];
const motivationalQuotes = [
  "The best way to get started is to quit talking and begin doing. - Walt Disney",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
  "Don’t let yesterday take up too much of today. - Will Rogers",
  "You learn more from failure than from success. Don’t let it stop you. Failure builds character. - Unknown",
  "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
  "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. - Steve Jobs",
  "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
  "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
  "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur. - Mohnish Pabrai",
  "We may encounter many defeats but we must not be defeated. - Maya Angelou",
  "Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann Wolfgang Von Goethe",
  "Imagine your life is perfect in every respect; what would it look like? - Brian Tracy",
  "We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
  "Whether you think you can or think you can’t, you’re right. - Henry Ford",
  "Security is mostly a superstition. Life is either a daring adventure or nothing. - Helen Keller",
  "The man who has confidence in himself gains the confidence of others. - Hasidic Proverb",
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "Creativity is intelligence having fun. - Albert Einstein",
  "What you lack in talent can be made up with desire, hustle and giving 110% all the time. - Don Zimmer",
  "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
];

export default function App() {
  const RandomImage = () => {
    return imageArr[Math.floor(Math.random() * imageArr.length)];
  };

  const RandomQuote = () => {
    return motivationalQuotes[
      Math.floor(Math.random() * motivationalQuotes.length)
    ];
  };

  return (
    <View style={styles.imageContainer}>
      <ImageBackground source={RandomImage()} style={styles.image}>
        <Text style={styles.textContainer}>{RandomQuote()}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    width: "60%",
  },
});
