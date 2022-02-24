import { StyleSheet, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Header from "../components/home/Header";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <BottomTabs navigation={navigation} icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f5",
    flex: 1,
  },
});

export default HomeScreen;
