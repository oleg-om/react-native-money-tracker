import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/ios-glyphs/35/292d32/home-page--v1.png",
    inactive: "https://img.icons8.com/ios-glyphs/35/c4c2c6/home-page--v1.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-glyphs/35/292d32/bank-cards.png",
    inactive: "https://img.icons8.com/ios-glyphs/35/c4c2c6/bank-cards.png",
  },
  {
    name: "Add",
    active: "https://img.icons8.com/ios-glyphs/70/292d32/add--v1.png",
    inactive: "https://img.icons8.com/ios-glyphs/70/292d32/add--v1.png",
  },
  {
    name: "Shop",
    active: "https://img.icons8.com/ios-glyphs/35/292d32/help.png",
    inactive: "https://img.icons8.com/ios-glyphs/35/c4c2c6/help.png",
  },
  {
    name: "Profile",
    active: "https://img.icons8.com/ios-glyphs/35/292d32/user-male-circle.png",
    inactive:
      "https://img.icons8.com/ios-glyphs/35/c4c2c6/user-male-circle.png",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[icon.name === "Add" ? styles.addIcon : styles.icon]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.continer}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    zIndex: 999,
    bottom: "3%",
  },
  continer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    paddingTop: 10,
  },
  icon: {
    width: 35,
    height: 35,
  },
  addIcon: {
    width: 70,
    height: 70,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});

export default BottomTabs;
