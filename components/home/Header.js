import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Hello</Text>
      <Text style={styles.nameText}>Oleg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  helloText: {
    fontSize: 24,
    color: "#bfbfbf",
  },
  nameText: {
    fontSize: 34,
  },
});

export default Header;
