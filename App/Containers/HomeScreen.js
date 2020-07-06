import React from "react";
import { View } from "react-native";
import HomeScreenHeader from "../Components/HomeScreenHeader";
import HomeScreenSlide from "../Components/HomeScreenSlide";
import HomeScreenNews from "../Components/HomeScreenNews";

export default function HomeScreen() {
  return (
    <View>
      <HomeScreenHeader />
      <HomeScreenSlide />
      <HomeScreenNews />
    </View>
  );
}
