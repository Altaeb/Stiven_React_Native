import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Libpro</Text>
    <Text style={styles.abdo}>Welcome</Text>
    <Button title="Click Me" onPress = {testButton}/>
    </View>
};
const testButton = () => {
  console.log("Hi, Aftiyah!")
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  },
  abdo: {
    fontSize: 50,
    color: 'green',
    textAlign: "center"
  }
});

export default HomeScreen;
